console.log('hello');
//network request mie use hota hai jab network request ka wait krna ho
let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a<0.5){
        reject("The value id less than 0.5")
    }
// or agr humko reject ky band resolve na chaly tw else block mie daal do resolve ko
    else{
        setTimeout(() => {
        console.log('im done');
        resolve("Salman")
    }, 3000);
    }
})
// settimeout jab chal gya promise resolve howa  or resolve mie salman return howa jo then mie pass howa ,network request mie jo data aya isko print kr diya
// prom1.then((a)=>{
//     console.log(a);
//     // or humko agr error chye tou catch ka use kro 
// }).catch((err)=>{
//     console.log(err);
    
// })

// prom1.catch((err)=>{
//     console.log(err);
    
// }) promise chaining bhi hoti hai jismie hum dosra promise used kr shkty hain
let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a<0.5){
        reject("The value id less than 0.5 2")
    }
// or agr humko reject ky band resolve na chaly tw else block mie daal do resolve ko
    else{
        setTimeout(() => {
        console.log('im done 2');
        resolve("Salman 2")
    }, 1000);
    }
})
// all tab use hoga jab asari promises jo array mie humny di hai wo resolve ho werna kch na aye
// let p3 = Promise.all([prom1,prom2]);
// p3.then((a)=>{
//     console.log(a);
    
// }).catch((e)=>{
//     console.log(e);
    
// })

//or humko farak nh parta tou allsettled
// let p3 = Promise.allSettled([prom1,prom2]);
// p3.then((a)=>{
//     console.log(a);
    
// }).catch((e)=>{
//     console.log(e);
    
// })

// phr Promise.race hai jismie jo promise phely chal jae wo mily,example ek image k download krny ky liyhe 5 links hai jisy phel hogya wo ajae
// let p4 = Promise.race([prom1,prom2]);
// p4.then((a)=>{
//     console.log(a);
    
// }).catch((e)=>{
//     console.log(e);
    
// })


let prom3 = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a<0.5){
        reject("The value id less than 0.5 3")
    }
// or agr humko reject ky band resolve na chaly tw else block mie daal do resolve ko
    else{
        setTimeout(() => {
        console.log('im done 3');
        resolve("Salman 3")
    }, 100);
    }
})
let prom4 = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a<0.5){
        reject("The value id less than 0.5 4")
    }
// or agr humko reject ky band resolve na chaly tw else block mie daal do resolve ko
    else{
        setTimeout(() => {
        console.log('im done 4');
        resolve("Salman  4")
    }, 1500);
    }
})
let prom5 = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a<0.5){
        reject("The value id less than 0.5 5")
    }
// or agr humko reject ky band resolve na chaly tw else block mie daal do resolve ko
    else{
        setTimeout(() => {
        console.log('im done 5');
        resolve("Salman 5")
    }, 2000);
    }
})
// jo prmoise phelyresolve howi iska resolve bhejy ga
let p4 = Promise.any([prom1,prom2]);
p4.then((a)=>{
    console.log(a);
    
}).catch((e)=>{
    console.log(e);
    
})


