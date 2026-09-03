// Learning arrays in TypeScript

// Basic array types
const chaiFlavours: string[] = ["Masala", "Adrak"]
const chaiPrice: number[] = [10, 20]

// TypeScript ensures every array element matches its declared type.

// Alternative generic array syntax
const rating: Array<number> = [4.5, 5.0]

// Array of objects with custom type
type chai = {
    name: string;
    price: number
}

const menu: chai[] = [
    {name: "Masala", price: 20},
    {name: "Adrak", price: 30}
]

// Custom object types can be reused to describe array elements.

// Readonly array - prevents modifications
const cities: readonly string[] = ["Delhi", "Jaipur"]
// cities.push("Pune")  // This would cause an error

// 2D Array - array of arrays
const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6]
]

// A two-dimensional array stores arrays as its elements.

let chaiTuple: [string, number];
chaiTuple = ["Masala", 20]
// chaiTuple = [20, "Masala"]

let userInfo: [string, number, boolean?]
userInfo = ["Prabhat", 100]
userInfo = ["Mayank", 101, true]

// The question mark makes the third tuple value optional.

// Readonly Tuples

const location: readonly [number, number] = [28.66, 28.66]

// Named Tuples

const chaiItems: [name: string, price: number] = ["Masala", 20]

let t: [string, number] = ["chai", 10]
t.push("extra") // unexpected behaviour
// Tuple types check the initial structure, but push can still add values.

// Enum - A way to define a set of named constants
// Useful when you have a fixed set of related values

enum cupSize {
    SMALL,
    MEDIUM,
    LARGE
}

// Enum members receive numeric values starting at zero by default.

const size = cupSize.LARGE

enum status {
    PENDING = 100,
    SERVED,     // 101
    CANCELLED   // 102
}

enum chaiType {
    MASALA = "masala",
    GINGER = "ginger"
}

// String enums make the stored values explicit and readable.

function makeChai(type: chaiType) {
    console.log(`Making: ${type}`);
}

makeChai(chaiType.GINGER)
// makeChai("masala")

enum randomEnum {
    ID = 1,
    NAME = "chai"
}

const enum sugars {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

const s = sugars.LOW
// A const enum is inlined by TypeScript during compilation.