// A function is a reusable block of code.
// `type` and `cups` are parameters with explicit TypeScript types.
function makeChai(type: string, cups: number) {
  console.log(`Making ${cups} chai of ${type}`);
}

// Arguments are the actual values passed to a function.
makeChai("Masala Chai", 2);

// `: number` describes the value returned by this function.
function getChaiPrice(): number {
  return 25;
}

// A function can return different types when the return type is inferred.
// Here, the result is either a string or null.
function makeOrder(order: string): string | null {
  if (!order) return null;
  return order;
}

// `void` means this function performs an action but returns no value.
function logChai(): void {
  console.log("Chai is ready");
}

// `?` makes a parameter optional, so it may be omitted or undefined.
function orderChai(type?: string): void {
  console.log(`Ordering ${type ?? "chai"}`);
}

// A default parameter is used when the caller does not provide a value.
function chaiOrder(type: string = "Masala Chai"): void {
  console.log(`Chai order: ${type}`);
}

// An object parameter can be described inline with property types.
// The `size` property accepts only the listed string literal values.
function createChai(order: {
  type: string;
  sugar: number;
  size: "small" | "large";
}): number {
  // Access object properties with dot notation.
  console.log(`${order.size} ${order.type} with ${order.sugar} sugar`);
  return 4;
}
