// Learning arrays in TypeScript

// Basic array types
const chaiFlavours: string[] = ["Masala", "Adrak"]
const chaiPrice: number[] = [10, 20]

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

// Readonly array - prevents modifications
const cities: readonly string[] = ["Delhi", "Jaipur"]
// cities.push("Pune")  // This would cause an error

// 2D Array - array of arrays
const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6]
]

let chaiTuple: [string, number];
chaiTuple = ["Masala", 20]
// chaiTuple = [20, "Masala"]

let userInfo: [string, number, boolean?]
userInfo = ["Prabhat", 100]
userInfo = ["Mayank", 101, true]

// Readonly Tuples

const location: readonly [number, number] = [28.66, 28.66]

// Named Tuples

const chaiItems: [name: string, price: number] = ["Masala", 20]

// Enum - A way to define a set of named constants
// Useful when you have a fixed set of related values

// Numeric Enum - Default starts from 0
enum ChaiType {
    Masala = 0,
    Adrak = 1,
    Green = 2
}

// String Enum - Each value is explicitly a string
enum Size {
    Small = "small",
    Medium = "medium",
    Large = "large"
}

// Using enums
const myChaiType: ChaiType = ChaiType.Masala
const myCupSize: Size = Size.Large
