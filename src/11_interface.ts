// An interface describes the shape of an object.
interface Chai {
    flavour: string
    price: number
    // The question mark makes this property optional.
    milk?: boolean
}

// This object must satisfy every required property in Chai.
const masala: Chai = {
    flavour: "Masala",
    price: 20
}

// Interfaces can make properties read-only or keep them changeable.
interface Shop {
    readonly id: number
    name: string
}

const s : Shop = {id: 1, name: "ChaiCode Cafe"}
// s.id = 2 // Error: the id property is read-only.

// An interface can describe a function's parameters and return type.

interface discountCalculator { 
    (price: number): number
}

const apply50: discountCalculator = (p) => p * 0.50;

// An interface can require specific methods on an object.
interface teaMachine {
    start(): void;
    stop(): void
}

// This object implements the teaMachine interface.
const machine: teaMachine = {
    start() {
        console.log("Start")
    },

    stop() {
        console.log("Stop")
    }
}

// An index signature allows any string key to contain a number.
interface chaiRatings {
    [flavour: string]: number
}

// Each flavour rating must be a number because of chaiRatings.
const ratings: chaiRatings = {
    Masala: 4.5,
    Ginger: 4.2
}

// Interfaces with the same name are merged by TypeScript. This can add
// properties to an interface declared elsewhere, such as in a library.
interface User {
    name: string
}

// This declaration adds the age property to the existing User interface.
interface User {
    age: number
}

// User now requires both name and age because the declarations were merged.
const u : User = {
    name : "Prabhat",
    age : 21
}

// An interface can extend one or more interfaces and inherit their properties.
interface A {a: string};
interface B {b: string};

// C must contain the properties inherited from both A and B.
interface C extends A, B {}