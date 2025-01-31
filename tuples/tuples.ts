// Tuples like an array with strict

//Tuple types are a type of array of known length and where the different elements may have different types. A value of type [number, string] is guaranteed to have a length of 2, with a number at element 0 and a string at element 1.

// hOW I DEFINE ARRAY
// const userValue:(string|number)[]=[1,"fsdf"]

//How I define Tuples
let tUser: [string, number, boolean];

tUser = ["fdsd", 54, true];

//Inside tuples there is a strong pattern here ,I can not revers that value
// Inside tuplse order of the array is really matters

// it restricting you to assign values

let rgb: [number, number, number] = [255, 355, 112];

// Not able to assign 4 th value inside that  ,only assign values that assign inside tuples
