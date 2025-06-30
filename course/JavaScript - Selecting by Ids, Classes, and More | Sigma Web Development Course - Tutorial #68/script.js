// might return an array of element don't be a idoit and try to cahnge background of an array just like now
let boxs =document.getElementsByClassName("box")
console.log(boxs)
boxs[2].style.backgroundColor = "red"
//  return only one element can change background of an element just like now
document.getElementById("green").style.backgroundColor ="green"

//  return only one element can change background of an element just like now
document.querySelector(".box").style.backgroundColor = "blue"

// might return an array of element don't be a idoit and try to change background of an array just like now
let boxes=document.querySelectorAll(".box")

boxes.forEach(element => {
    element.style.backgroundColor ="blue"
});

console.log(document.getElementsByTagName("div"))
// returns that html collection HTMLCollection(7) [div.container, div.box, div.box, div.box, div#green.box, div.box, div.box, green: div#green.box]