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

