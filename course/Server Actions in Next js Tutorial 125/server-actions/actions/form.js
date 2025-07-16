"use server"
import fs from 'fs/promises'
export const handleSubmit =async (e)=>{
    // here name and address are names in input
    console.log(e.get("name"),e.get("address"))
    let a =await fs.writeFile("salman.txt",`The name is ${e.get("name")},The address is ${e.get("address")}`)
    // console.log(a);
    
  }