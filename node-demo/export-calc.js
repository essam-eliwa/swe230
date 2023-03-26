
//Creating a custom node module
export function myDateTime() {
   return Date();
} 

// And making different functions
export function add (a, b) {
    return a + b; // Adding the numbers
 };
 
 export function sub (a, b) {
    return a - b; // Subtracting the numbers
 };
 
 export function mul (a, b) {
    return a * b; // Multiplying the numbers
 };
 
 export function div (a, b) {
    return a / b; // Dividing the numbers
 };