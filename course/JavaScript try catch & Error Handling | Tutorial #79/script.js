let a = prompt("enter a first number")
let b = prompt("enter a second number")
if(isNaN(a) || isNaN(b)){
    throw new Error("string are not allow");
    // script yaha py ruk jae gi agar oper wala error throw howa tou 
}
let sum = parseInt(a)+parseInt(b)
alert(`the sum is ${sum}`)

function naame() {
    try {
    console.log('the sum is ',sum*x);
    return true
} catch (error) {
    console.log('bacha ghalti kr gya');
    return false
}
finally{
    console.log('ye finally return ky bd bhi chaly ga ')
}
}
let c = naame()

