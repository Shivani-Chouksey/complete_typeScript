const User = {
  name: "shivani",
  email: "email.com",
  isActive: true,
};

// function createUser({ name: string, isPaid: boolean }) {}

function createCourse(): { name: string; price: number } {
  return { name: "chouksey", price: 463245 };
}
// createUser({ name: "chouksey", isPaid: 463245 });

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser(user: User): User {
  return { name: "", email: "", isActive: true };
}
createUser({ name: "", email: "", isActive: true });

// We’ve been using object types and union types by writing them directly in type annotations. This is convenient, but it’s common to want to use the same type more than once and refer to it by a single name.

// A type alias is exactly that - a name for any type. The syntax for a type alias is:

type Point = {
  x: number;
  y: number;
};

// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });
// Try
// You can actually use a type alias to give a name to any type at all, not just an object type. For example, a type alias can name a union type:

type ID = number | string;

// Read Only and Optional

type UserInfo = {
  readonly _id: string; // using readonly that key is only only nobody would able to change that
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number; //    ? using  that it wil make that field  optionally not required
};

let myUser: UserInfo = {
  _id: "1234",
  name: "text",
  email: "gmail.com",
  isActive: true,
};

type cardNumber = {
  contactNumber: string;
};

type cardDate = {
  cardDate: string;
};

//use existing type by creating another third type
type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };
