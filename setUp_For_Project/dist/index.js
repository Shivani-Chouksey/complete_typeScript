"use strict";
class User {
    constructor(email, name) {
        this.city = "";
        this.courseCountNumber = 1;
        this.dob = "22/22/22"; // using private variable dob not accessable outof the class only access that variable inside the class only
        this.email = email;
        this.name = name;
        this.dob; ///  that is correct able to assign dob value
    }
}
const shivani = new User("@gmail.com", "ghfaghf");
shivani.city = "mumbai";
// shivani.dob = "fdsfd";   // show error - you can not assign value
// shivani.dob // --- show error and , not able to access dob outside the class
class UserDetail {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = "";
        this._courseCount = 1;
    }
    // that method is also not accessable outside the class
    deleteToken() {
        console.log("Token Deleted");
    }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    // used for accessing the value of private
    //  and public variables that is not accessable simple
    //########getter
    get courseCount() {
        return this._courseCount;
    }
    //########setter
    // setter not return any type of value and define using set keyword
    // used to set value inside publice variable , here can not assign value derectly
    set courseCount(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error("Course count should be morethen a one ");
        }
        this._courseCount = courseNumber;
    }
}
//inheritance\
// this keyword " extends" inherit the parent class
// it require all the property of parent except the private property
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        // this.dob=4
        this.courseCountNumber = 5;
    }
}
