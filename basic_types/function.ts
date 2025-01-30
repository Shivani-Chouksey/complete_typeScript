// function addTwo(num) {
//     num.toUpperCase()  // here i can allow to perform string methods with number that is not good practise
//   return num + 2;
// }

// addTwo(2)
// //if i pass string inside function it should also work
// addTwo("2")
// that is not a good approch

//#######################################

// that show error

// Parameter 'num' implicitly has an 'any' type.ts(7006)
// (parameter) num: any

//whenever i dont define type ---- typscript automatically assign type any
//############################################

// Fix that function
// define value type  that comes in function
//in my case i define number that should aways take a perameter a number init
//##############################

// function addTwo(num: number) {
//   return num + 2;
// }

// addTwo(2);

//#########################

// addTwo("2"); -------- // Here automatically typescript  gives a error this is not allow, this is not a number ,always pass number to it .
//not allow any other methods that not exist in number types

function getUpper(value: string) {
  return value.toUpperCase();
}

// getUpper(4)
//if not assign a type i takes any value that could be a number or any , its a problamatic bcoz  i write whole logic to perform a task over the string and someone using that function pass number inside it it breaks the logic that is not good for projects -- here thats why define the type afterthat anyone assign a number that give a error -- number is not assignable ,shoun't be doing that   -- tha tis easy to develop a programe with teams
getUpper("gfgaff");

// function signUpUser(name,email,password){

// }
// signUpUser(1,2,3)  /// this allow to that , this defeat the purpose --that is not good

function signUpUser(name: string, email: string, isPaid: boolean = false) {}

let loginUser = (name: string, email: string, isPaid: boolean) => {};
signUpUser("shivani", "email.com", false);
// loginUser("test", "test@gmail.com");

//############Assign a type to return

function addTwo(num: number): number {
  return num + 2;
  // return "dashgdagsd"  ///  this is not to allow that , it should not return type string or any other , It should return number only
}

addTwo(2);

//arrow function
const getHello = (val: string): string => {
  return "Hello";
};

const heros = ["one", "two", "three"];
// heros.map((hero) => { return`hero is ${hero}`});  // it should return any value it could be a string or number or any other  -- that not a good approach  -- so here define a return type

heros.map((hero): string => {
  return `hero is ${hero}`;
});

// that is a good

// function consoleError(errMsg: string) {
//   console.log(errMsg);
// }

// that not a good practise , whoevere using that function is dont any information about that it return any value or not

function consoleError(errMsg: string): void {
  console.log(errMsg);
  // return "dfhdfhgfd"   /// ------------gives a error here not return anything
}
//here whoe ever using that function who knows more about the function -that means it not going to return anything

function handleError(errMsg: string): never {
  throw new Error(errMsg);
}
// Some functions never return a value:
// The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.
