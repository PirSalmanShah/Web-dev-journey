"use client"
import { useRef } from "react";
import { handleSubmit } from '@/actions/form'
export default function Home() {
  let ref = useRef()
  return (
   <div className="w-1/2 mx-auto my-16">
    <form ref={ref} action={(e)=>{handleSubmit(e);ref.current.reset()}}>
      <div className="text-white flex gap-2">
        <label className="font-black" htmlFor="name">Name</label>
        <input className="border border-white rounded-sm text-white" type="text" name="name" id="name" />
      </div>
      <div className="text-white flex gap-2">
        <label className="font-black" htmlFor="address">Address</label>
        <input className="border border-white rounded-sm text-white" type="text" name="address" id="address" />
      </div>
    <div><button className="border border-white rounded-md">Click me</button></div>
    </form>
   </div>
  );
}
