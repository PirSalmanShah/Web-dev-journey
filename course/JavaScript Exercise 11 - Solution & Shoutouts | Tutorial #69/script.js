
function my_fact(n){
    if (n==1){
        return 1
    }
    else{
        return n*my_fact(n-1)
    }
}
console.log(my_fact(5))

let a = 5
function fact(number) {
    let arr =Array.from(Array(number+1).keys())
    console.log(arr.slice(1))
    let c = arr.slice(1).reduce((a,b)=>{
        return a*b;
    })
    console.log(c)
}
fact(a)