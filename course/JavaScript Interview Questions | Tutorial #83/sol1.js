// 1. The Magical Sorting Hat:
//    Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

let names = [
    "Alexander",
    "Beatrice",
    "Charlotte",
    "Dominic",
    "Eleanor",
    "Frederick",
    "Gabriella",
    "Harrison",
    "Isabella",
    "Jonathan",
    "Katherine",
    "Lorenzo",
    "Madeline",
    "Nathaniel",
    "Olivia",
    "Liam",
    "Zoe",
    "Harper",
    "Mason",
    "Theodore",
    "Natalie",
    "Christabella",
    "Alexandrianna"
]

let houses = []
names.forEach(i => {
    if (i.length<6) {
        houses.push(i+" of Gryffindor")
    } 
    else if (i.length<8) {
        houses.push(i+" of Hufflepuff")
    }
    else if (i.length<12) {
        houses.push(i+" of Ravenclaw")
    }
    else{
        houses.push(i+" of Slytherin")
    }
    
});
console.log(houses )

