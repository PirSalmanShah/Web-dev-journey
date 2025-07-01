const fs = require("fs");

// console.log(fs);

console.log('Starting to write on new file');
// fs.writeFileSync("test.txt","This is a test file",()=>{
//     console.log('done writing on file');
//     the arrow function is not being executed is because we are using fs.writeFileSync, which is the synchronous version of the file-writing function — and does not accept a callback.

// });
// this fs.writeFile is asynchronous version so call back will execute
// fs.writeFile("test2.txt", "this is a second test", () => {
//     console.log('This is second callback');

//     fs.writeFile("test3.txt", "This is third test file", () => {
//         console.log('This is third callback');
//         fs.readFile("test3.txt", (error, data) => {
//             console.log('this is fourth call back in read');
//             console.log(error, data);
//             console.log(error, data.toString());
//         })


//     })
// })

fs.appendFile("test.txt","Salman robo",(e,d)=>{
    console.log(e,d);
    
})
console.log('ended writing on new file');


