console.log(document.querySelector(".box").innerHTML) // I am a BOX
console.log(document.querySelector(".container").innerHTML) //<div class="box">I am a BOX</div>


console.log(document.querySelector(".box").innerText) // I am a BOX
console.log(document.querySelector(".container").innerText) //I am a BOX

console.log(document.querySelector(".container").textContent) //I am a BOX only text minus tag

console.log(document.querySelector(".box").dataset)


let card = document.createElement("div")
card.setAttribute("class","salman")
card.innerHTML="I'm have been inserted <b>by salman</b>"

document.querySelector(".container").append(card)

let c = document.querySelector(".container")
c.insertAdjacentHTML("beforeend","<b>YA ALLAH</b> please help me")


document.querySelector(".container").classList.toggle("red")