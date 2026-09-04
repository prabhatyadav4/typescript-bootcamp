// Describes the required and optional properties of a chai object.
interface Chai {
    flavour: string
    price: number
    // Chai may or may not contain milk.
    milk?: boolean
}

// Creates a chai object that matches the Chai interface.
const masala: Chai = {
    flavour: "Masala",
    price: 20
}

// Describes a shop with a read-only ID and a changeable name.
interface Shop {
    readonly id: number
    name: string
}

const s : Shop = {id: 1, name: "ChaiCode Cafe"}
// s.id = 2 // Error: the id property is read-only.

// Defines a function type that accepts a price and returns a number.

interface discountCalculator { 
    (price: number): number
}

const apply50: discountCalculator = (p) => p * 0.50;

// Defines the methods required by a tea machine.
interface teaMachine {
    start(): void;
    stop(): void
}

// Implements the teaMachine interface.
const machine: teaMachine = {
    start() {
        console.log("Start")
    },

    stop() {
        console.log("Stop")
    }
}

// Allows numeric ratings to be accessed by any flavour name.
interface chaiRatings {
    [flavour: string]: number
}

// Stores ratings for different chai flavours.
const ratings: chaiRatings = {
    Masala: 4.5,
    Ginger: 4.2
}

