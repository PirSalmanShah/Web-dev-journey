let arr =[1,2,3,4,5,6,7,8,9]
async function delayPromise(value) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value*2)
        },500);
    })    
}

let a = arr.map(async(v)=>{
    let b = await delayPromise(v);
    return b
})

Promise.all(a).then(result => {
    console.log(result);  // [2, 4, 6, 8, 10, 12, 14, 16, 18]
});
