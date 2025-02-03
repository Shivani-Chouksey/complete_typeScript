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

function anotherFunction<T, U extends number>(valONe: T, valTwo: U): object {
  return { valONe, valTwo };
}

anotherFunction(3, 4);

interface DataBase {
  connection: string;
  userName: string;
  password: string;
}
function anotherFunction2<T, U extends DataBase>(valONe: T, valTwo: U): object {
  return { valONe, valTwo };
}

// anotherFunction2(3, {});

//Class type generic
interface Quiz {
  name: string;
  type: string;
}
interface Course {
  name: string;
  author: string;
  subject: string;
}

// its a generic class
class Sellable<T> {
  public cart: T[] = [];
  addToCart(product: T) {
    this.cart.push(product);
  }
}
