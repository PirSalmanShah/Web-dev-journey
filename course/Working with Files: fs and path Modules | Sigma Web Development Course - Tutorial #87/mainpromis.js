import fs from "fs/promises"

let a = await fs.readFile("test.txt");
console.log(a.toString());

let b = await fs.appendFile("test.txt","\n\n\n\n\n\n promises are cool")

console.log(a.toString(),b);