// let school={
//     hasclass:true
// };

// let student={
//     studies:true
// };

// student.__proto__=school;

class Animal {
    constructor(name) {
        this.name =name;
        console.log('Animal ban gya object');
        
    }
    eat() {
        console.log('khana kha rha hai');
        
    }

    sleep() {
        console.log('soo rha rha hai');
        
    }
}
class Lion extends Animal {
    constructor(name){
        // super isly use kiya takay phely animal ka constructor run ho werna error aye ga or name bhi super mie isly pass kiya takay opar waly ko mil shky
        super(name)
        console.log('Animal ban gya object or wo sher hai');
    }
    // method overriding
    eat() {
        // super wala ab apny super waly function ko call kry ga
        super.eat()
        console.log('sheer khana kha rha hai');
        
    }
}
let a = new Animal("bunny")
let l = new Lion("simba")
console.log(l)