"use strict";
class User {
    constructor(email, name) {
        this.city = "";
        this.dob = "22/22/22";
        this.email = email;
        this.name = name;
    }
}
const shivani = new User("@gmail.com", "ghfaghf");
shivani.city = "mumbai";
// shivani.dob = "fdsfd";   // show error
