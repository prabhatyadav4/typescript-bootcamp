// Union types - allow a variable to hold multiple types

// Variable can be either number or string
let subs: number | string  = '1M';

// String literal union - only specific string values allowed
let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending';

// apiRequestStatus = "done"       // ❌ - Invalid: "done" not in union

apiRequestStatus = "success"       // ✅ - Valid: "success" is in union

// Another string literal union example
let airlineSeat: 'aisle' | 'window' | 'middle' = 'middle';
airlineSeat = 'window';

const orders = ['12', '20', '28', '42'];

// Avoid using 'any' type - use union with undefined instead for optional variables

// Union type for optional string - can be string or undefined
let currentOrder : string | undefined;  // avoid any

// Loop through orders to find specific value
for(let order of orders) {
    if(order === '28') {
        currentOrder = order;
        break;
    }
    currentOrder = "11";
}

console.log(currentOrder)