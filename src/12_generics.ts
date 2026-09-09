// Generic means general
// T is a type parameter: TypeScript infers the type of item and preserves it.
function wrapInArray<T> (item: T): T[] {
    return [item]
}

// T becomes string, number, and an object type in these calls.
wrapInArray("Masala");
wrapInArray(21)
wrapInArray({flavour: "Ginger"})

// A function can use more than one generic type parameter.
// A is the type of the first argument, and B is the type of the second.
function pair<A, B> (a: A, b: B): [A, B] {
    return [a, b]
}

// The returned tuple keeps both argument types: [string, number].
pair("Masala",  20)
pair("Ginger", 30)

// Generic Interface
// Box<T> can hold content of any type while remaining type-safe.
interface Box<T> {
    content: T
}

// The type argument determines what content each box accepts.
const numberBox: Box<number> = {content: 10}
const numberBoxCup: Box<string> = {content: "Big"}

// Generic is commonly used in APIs, Form States

// This interface describes an API response whose data type can vary.
interface ApiPromise<T> {
    status: number,
    data: T
}

// For example, ApiPromise<string> would require data to be a string.