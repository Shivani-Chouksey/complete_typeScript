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
function addTwo(num) {
    return num + 2;
}
addTwo(2);
// addTwo("2"); -------- // Here automatically typescript  gives a error this is not allow, this is not a number ,always pass number to it .
//not allow any other methods that not exist in number types
function getUpper(value) {
    return value.toUpperCase();
}
// getUpper(4)
//if not assign a type i takes any value that could be a number or any , its a problamatic bcoz  i write whole logic to perform a task over the string and someone using that function pass number inside it it breaks the logic that is not good for projects -- here thats why define the type afterthat anyone assign a number that give a error -- number is not assignable ,shoun't be doing that   -- tha tis easy to develop a programe with teams
getUpper("gfgaff");
// function signUpUser(name,email,password){
// }
// signUpUser(1,2,3)  /// this allow to that , this defeat the purpose --that is not good
function signUpUser(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}
var loginUser = function (name, email, isPaid) { };
signUpUser("shivani", "email.com", false);
loginUser("test", "test@gmail.com");
