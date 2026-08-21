// Interfaces and type aliases can both describe the shape of an object.

// function makeChai(order: {type: string; sugar: number; strong: boolean}) {
//     console.log(order);
// }                            

type chaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
}

// Both functions accept only objects that match the chaiOrder shape.
function makeChai(order: chaiOrder) {
    console.log(order);
}

function serveChai(order: chaiOrder) {
    console.log(order);
}


type teaRecipe1 = {
    water: number;
    milk: number;
}

// A class can implement a type alias when it provides all required properties.
class masalaChai1 implements teaRecipe1 {
    water = 100;
    milk = 50;
}

type cupSize1 = "small" | "large";

// A class cannot implement a union of string literals directly.
// class chai implements cupSize {

// }

// Interfaces are another way to define an object contract.
interface teaRecipe2  {
    water: number;
    milk: number;
}

class masalaChai2 implements teaRecipe2 {
    water = 100;
    milk = 50;
}

interface cupSize2 {
    // The size property is restricted to these two literal values.
    size: "small" | "large";
}

// This class satisfies the cupSize2 interface.
class chai implements cupSize2 {
    size: "small" | "large" = "large";
}

// type response = {ok: true} | {ok: false}

// class myRes implements response {
//     ok: boolean = true;
// }                                  //  ❌

// Union types allow a value to be one of several specific types or values.

type teaType = "masala" | "ginger" | "lemon"        // Literal Types

function orderChai(t: teaType) {
    console.log(t);
}

// 

type baseChai = {teaLeaves: number}
type extra = {masala: number}

type masalaChai = baseChai & extra

// Intersection types combine the properties of multiple object types.
const cup: masalaChai = {
    teaLeaves: 2,
    masala: 1
}

// 

type user = {
    username: string;
    // The question mark makes bio optional.
    bio?: string
}

const u1: user = {username: "Prabhat"}
const u2: user = {username: "Prabhat", bio: "Serves well"}

// 

type config = {
    // readonly prevents this property from being changed after creation.
    readonly appName: string
    version: number
}

const cfg: config = {
    appName: "MasterJi",
    version: 1
} 

// cfg.appName = "ChaiAurCode";     // ❌