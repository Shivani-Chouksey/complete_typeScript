class User {
  public email: string;
  name: string;
  city: string = "";
  private readonly dob: string = "22/22/22"; // using private variable dob not accessable outof the class only access that variable inside the class only
  constructor(email: string, name: string) {
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
  readonly city: string = "";

  constructor(
    public email: string,
    public name: string,
    private userId: number
  ) {}
}
