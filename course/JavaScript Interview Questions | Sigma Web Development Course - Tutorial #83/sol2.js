// 2. The Double Trouble:
//    You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

let numbers = [3, 5, 5, 7, 8, 8, 8, 10, 12];

let double =[]

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element!=numbers[index+1]){
        double.push(element*element);
    }
    
}
console.log(double);
