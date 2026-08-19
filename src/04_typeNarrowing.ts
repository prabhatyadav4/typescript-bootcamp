// Type narrowing using typeof operator
function getChai(kind: string | number) {
    if(typeof kind === 'string') {
        // kind is narrowed to string
        return `Making ${kind} chai...`;
    }
    // kind is narrowed to number
    return `Chai order: ${kind}`;
}

// Type narrowing using truthiness check
function serveChai(msg?: string) {
    if(msg) {
        // msg is narrowed to string (not undefined)
        return `Serving ${msg}`;
    }
    return `Serving default masala chai`;
}

// Type narrowing using literal types
function orderChai(size: "small" | "medium" | "large" | number) {
    if(size === 'small') {
        // size is narrowed to "small"
        return 'small cutting chai...';
    }
    if(size === "medium" || size === "large") {
        // size is narrowed to "medium" | "large"
        return "make extra chai"
    }

    // size is narrowed to number
    return `chai order #${size}`;
}

class kulhadChai {
    serve() {
        return `Serving Kulhad Chai`;
    }
}

class cuttingChai {
    serve() {
        return `Serve Cutting Chai`;
    }
}

function serve(chai: kulhadChai | cuttingChai) {
    if(chai instanceof kulhadChai) {
        return chai.serve();
    }
}

// Type Definition

type chaiOrder = {
    type : string
    sugar : number
}

function isChaiOrder(obj: any): obj is chaiOrder {
    return (
        typeof obj === "object" && obj !== null && 
        typeof obj.type === "string" &&
        typeof obj.sugar === "number" 
    )
}

function serveOrder(item: chaiOrder | string) {
    if(isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} sugar` 
    }

    return `Serving custom chai: ${item}`
}

type masalaChai = {type: "masala"; spicelevel: number};
type gingerChai = {type: "ginger"; amount: number};
type elaichiChai = {type: "elaichi"; aroma: number};

type chai = masalaChai | gingerChai | elaichiChai;

function makeChai(order: chai) {
    switch(order.type) {
        case "masala":
            return 'Masala Chai'
        case "ginger":
            return 'Ginger Chai'
        case "elaichi":
            return 'Elaichi Chai'
    }
}

function brew(order: masalaChai | gingerChai) {
    if('spicelevel' in order) {
        // The `in` operator narrows order to masalaChai.
        return `Brewing masala chai with spice level ${order.spicelevel}`;
    }

    // Only gingerChai remains after the narrowing check.
    return `Brewing ginger chai with ${order.amount} ginger`;
}

// Unknown

function isStringArray(arr: unknown): arr is string[] {
    // Check the unknown value before reading array elements.
    return Array.isArray(arr) && arr.every((item) => typeof item === "string");
}