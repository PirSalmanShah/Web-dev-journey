// In next js every component will be by defualt server component even this page it means it will be on server adn served to client so react hook likes useState and useEffect will not work in server side , so we have to use "use client" command to run it

// "use client"
// import { useState } from "react";
import { readFile } from "fs";
import fs from "fs/promises"
export default function Home() {
  // const [count, setCount] = useState(0)
  let file = fs.readFile("data.json")
  file.then(e=>{console.log(e.toString())})
  return (
   <div>
    Salman Shah 
    <br />
    {/* <button onClick={()=>{setCount(count+1)}}>Click me</button> */}
   </div>
  //  we can import client components in server components too
  );
}
