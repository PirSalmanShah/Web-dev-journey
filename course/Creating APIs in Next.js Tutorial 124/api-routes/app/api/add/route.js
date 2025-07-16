import { NextResponse } from "next/server";
 
export async function POST(request) {
    let data =await request.json()
    
    console.log(data)
    // and if we want to sent same data we can do return NextResponse.json({success:true,data})
    return NextResponse.json({success:true,data:"Done"})
}
 

 
