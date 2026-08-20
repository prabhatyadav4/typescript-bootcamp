// Type Assertion - Explicitly tell TypeScript what type a value is

let response: any = "42";

// let nu0mericLength: number = response.length   // ❌ Cannot access .length without type assertion

// Type assertion using 'as' keyword to tell TypeScript this is a string
let numericLength: number = (response as string).length; // ✅

// Define a book type
type book = {
  name: string;
};

// Parse JSON string and assert it as book type
let bookString = '{"name": "Who Moved My Cheese?"}';
let bookObject = JSON.parse(bookString) as book;

console.log(bookObject.name);

// Assert DOM element as HTMLInputElement for type safety
const inputElement = document.getElementById("username") as HTMLInputElement;

// Type Any

let value1: any;

value1 = "chai";
value1 = [1, 2, 3];
value1 = 2.5;
value1.toUpperCase();

// Type Unknown

let value2: unknown;

value2 = "chai";
value2 = [1, 2, 3];
value2 = 2.5;

// value2.toUpperCase()     // ❌

if (typeof value2 === "string") {
  value2.toUpperCase();
} // ✅

try {
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log("Error", error);
}

const data: unknown = "chai aur code";
const strData: string = data as string;

// Type Never

type role = "admin" | "user";

function redirectBasedOnRole(role: role): void {
  if (role === "admin") {
    console.log("Redirecting to admin dashboard");
    return;
  }

  if (role === "user") {
    console.log("Redirecting to user dashboard");
    return;
  }

  role; // role: never
}

function neverReturn(): never {
  while (true) {}
}
