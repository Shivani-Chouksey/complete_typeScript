class User {
  email: string;
  name: string;
  city: string = "";
  readonly dob: string = "22/22/22";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const shivani = new User("@gmail.com", "ghfaghf");
shivani.city = "mumbai";
// shivani.dob = "fdsfd";   // show error
