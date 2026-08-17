function getChai(kind: string | number) {
    if(typeof kind === 'string') {
        return `Making ${kind} chai...`;
    }
    return `Chai order: ${kind}`;
}

// Truthiness 

function serveChai(msg?: string) {
    if(msg) {
        return `Serving ${msg}`;
    }
    return `Serving default masala chai`;
}