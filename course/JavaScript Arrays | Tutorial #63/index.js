// string is immutable any operation on it will return new string and original string will be intact, but where as array are mutable and operation on it will change the original array

let arr = [1,2,4,5,7,8,9]
console.log(arr,typeof arr)

// [
//   1, 2, 4, 5,
//   7, 8, 9
// ] object
console.log(arr.toString())
// 1,2,4,5,7,8,9
console.log(arr.join(" hiha "))
// 1 hiha 2 hiha 4 hiha 5 hiha 7 hiha 8 hiha 9

arr.pop()
console.log(arr)

arr.push(23,45,465)
console.log(arr)

// shift method removes first element and returns it

console.log(arr.shift())
console.log(arr)

// unshift("") method add first element 
console.log(arr.unshift("Salman"))
console.log(arr)

// shift and pop are similar & push and unshift are similar

delete arr[2]
console.log(arr)
console.log(arr.length)
console.log(arr[2])
// console.log(arr)==>[ 'Salman', 2, <1 empty item>, 5, 7, 8, 23, 45, 465 ]
// console.log(arr.length)==>9 exact same lenght as before
// console.log(arr[2])==> undefined
let a1 =[1,2,3,4]
let a2 = [5,6,7]
let a3 = [8,9,10]

a1.concat(a2,a3) //joins a2 and a3 to a1 but returns new array
console.log(a1) // same original array [ 1, 2, 3, 4 ]

let a4=a1.concat(a2,a3)
console.log(a4) // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]


// splice(index,number of element) deletes the element form array and return the deleted values
console.log(a4.splice(1,4)) // [ 2, 3, 4, 5 ]
console.log(a4) //[ 1, 6, 7, 8, 9, 10 ]

console.log(a4.splice(1,3,"salman","shah")) //[ 6, 7, 8 ]
console.log(a4) // [ 1, 'salman', 'shah', 9, 10 ]


arr.reverse() // reverse the soucre array
console.log(arr)