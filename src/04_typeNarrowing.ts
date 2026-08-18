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