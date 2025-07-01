const fs =require('fs');
const path = require('path');

let filePath = __dirname;
console.log(filePath);
// Function to get current filenames
// in the directory
let folder = fs.readdirSync(filePath);
console.log(folder);
let filetypes=[] ;
// get file types
folder.forEach(file => {
    file =  path.extname(file).slice(1);
    if((!filetypes.includes(file))&&(file!="js")&&(file!="json")){

        filetypes.push(file);
    }

    
});


console.log('File types in the directory:', filetypes);

filetypes.forEach(filext=>{
    fs.mkdirSync(path.join(filePath,filext))
    
})

filetypes.forEach(filenames=>{
    if(folder.includes(filenames)){
        fs.renameSync(path.join(filePath,))
    }
})

for (let i = 0; i < folder.length; i++) {
 
    for (let j = 0; j < filetypes.length; j++) {
        if(folder[i].endsWith(filetypes[j])){
            fs.renameSync(path.join(filePath,folder[i]),path.join(filePath,filetypes[j],folder[i]))
        }
        
    }
    
}

