let button = document.getElementById("btn");
button.addEventListener("click",()=>{
 document.querySelector(".box").innerText= "i was change on click"
})

button.addEventListener("keydown",(e)=>{
 document.querySelector(".box").innerText= e.key
})

document.addEventListener("keydown",(e)=>{
 console.log(e.key)
})

