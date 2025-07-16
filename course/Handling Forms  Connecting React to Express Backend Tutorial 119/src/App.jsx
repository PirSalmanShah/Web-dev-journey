import { useState } from 'react'
import { useForm } from "react-hook-form";
import './App.css'

function App() {
  const { register, handleSubmit, setError, formState: { errors,isSubmitting } } = useForm();
  async function delay(sec) {
    return new Promise((resolve, reject) => {
      setInterval(() => {
        resolve()
      }, sec*1000);
    })
  }
  
  const onSubmit = async(data) => {
    // await delay(5)
    // if(data.username !== "salman"){
    //   setError("myform",{message:"invalid Username and passwords"})
    //   return
    // }
    let res = await fetch("http://localhost:3000/",{method:"POST",headers: {
      "Content-Type": "application/json",},body:JSON.stringify(data),})
    let d = await res.text()
    console.log(d,data);}



  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            {isSubmitting && <div>Loading...</div>}
          <input {...register("username",{ required: {value:true,message:"Username is required"}, maxLength: {value:8,message:"Max length is 8 characters"},minLength: {value:3,message:"Min length is 3 characters"} })} type="text" placeholder='Username' />
          {errors.username && <div  className='red'>{errors.username.message}</div>}
        </div>


        <div>

          <input {...register("password")} type="password" placeholder='Password' />
        </div>
        <input disabled={isSubmitting} type="submit" />
        {errors.myform && <div className='red'>{errors.myform.message}</div>}

      </form>
    </>
  )
}

export default App
