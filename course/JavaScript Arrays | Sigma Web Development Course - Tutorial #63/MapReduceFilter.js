let arr =[9,4,3,2,1,6]

let arrMap =arr.map((e,index,array)=>{
    return e*e
})

console.log(arrMap) //[ 81, 16, 9, 4, 1, 36 ] return a new array

// filter(predicate(function)) filters the values in an array that passes a specific test ,return a new array
const greaterThanFive =(e)=>{
    if(e>4){
        return true
    }
    return false
}
let a = arr.filter(greaterThanFive)
console.log(a) //[ 9, 6 ]


let a2=[1,2,3,4,5,6,7,8,9]
const add=(a,b)=>{
    return a+b
}

let a3 = a2.reduce(add) // convert array in single value
console.log(a3) // 1+2+3+4+5+6+7+8+9=45

