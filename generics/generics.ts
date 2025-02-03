const matchScore: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

// when assign type any it  takes any type of values and return also any type of value
function identityTwo(val: any): any {
  return val;
}

//it like of any but in that there will take any type of value and return only the taken value type , it logos the type wherever it assign the any values
function identityThree<Type>(val: Type): Type {
  return val;
}

identityThree(2); // i pass number that return also a number
identityThree("name"); // i pass string that return also a string

// define using Shortcut
function identityFour<T>(val: T): T {
  return val;
}

interface Bootle {
  brand: string;
  type: number;
}

function indentityFive<Boolean>() {}

function getSearchProducts<Type>(products: Type[]): Type {
  // do some database operations
  const myIndex = 3;
  return products[myIndex];
}

// generic arrow method
// <T,>  --- comma define that that is not an aordinary tag like h1,p tag ,not a jsx syntax , this is a generic
const getMoreSearchProdcuts = <T>(products: T[]): T => {
  // do some database operations
  const myIndex = 3;
  return products[myIndex];
};
