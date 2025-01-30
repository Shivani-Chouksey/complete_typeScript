var User = {
    name: "shivani",
    email: "email.com",
    isActive: true
};
// function createUser({ name: string, isPaid: boolean }) {}
function createCourse() {
    return { name: "chouksey", price: 463245 };
}
function createUser(user) {
    return { name: "", email: "", isActive: true };
}
createUser({ name: "", email: "", isActive: true });
// Exactly the same as the earlier example
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });
var myUser = {
    _id: "1234",
    name: "text",
    email: "gmail.com",
    isActive: true
};
