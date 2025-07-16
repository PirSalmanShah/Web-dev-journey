"use client"

export default function Home() {
  const handleClick = async()=>{
    let data = {name:"Salman",role:"Developer"}
    let a = await fetch("/api/add",{
  method: "POST",headers:{"Content-Type":"application/json"},
  body: JSON.stringify(data),
})
let b = await a.json()
console.log(b)
  }
  return (
    <div>
      <h1 className="text-xl font-black">Next.JS Api Route Demo</h1>
      <br />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
