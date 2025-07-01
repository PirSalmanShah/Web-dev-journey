
// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // console.log('GOT data');
//             resolve(450)

//         }, 3000);
//     })
// }

// console.log('loading module');
// console.log('Module starting');
// console.log('loading data');
// let data = getData()


// js ki async nature ki waja sy nechy wala code promise ky phely execute hoga jab tak pomise resolve ho 
// console.log('continue working');

// console.log('task 2');

// ya tw hum call back use kry 
// data.then((v) => {
//     console.log(data);
//     console.log('continue working');

//     console.log('task 2');
// })


// ya tw hum await ka use kry



// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // console.log('GOT data');
//             resolve(450)

//         }, 3000);
//     })
// }

// await async function ky indar fihaal use hota hai tw hmny main wrapper function banya hai

// async function main(){
// console.log('loading module');
// console.log('Module starting');
// console.log('loading data');
// let data = await getData()
// console.log(data);
// console.log('continue working');
// console.log('task 2');
// }

// main()


// ==========================================================================================================
// fetch API actual function instead of set timeout

async function getData() {
    // fetch API dummy data from jsonPlacholder.com
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))
    //instead of then() to parse we will used
    let v = await x.json()
    // agr text mie chye mltb sring tou x.text()krna
    // console.log(v);
    return v
    // let data = await getData(v) jae ga agr hum await us nahi krty yaha tw humko promise pakara dyta 
}
async function postData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
                        method: 'POST',
                        body: JSON.stringify({
                        title: 'foo',
                        body: 'bar',
                        userId: 1,
                        }),
                    headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                        },
                    })
    
                    let v =await x.json()
                    return v
}


async function main(){
console.log('loading module');
console.log('Module starting');
console.log('loading data');
let data = await getData()
let postdata = await postData()
console.log(data);
console.log(postdata);
console.log('continue working');
console.log('task 2');
}

main()