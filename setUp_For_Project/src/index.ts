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
  private _courseCount = 1;

  constructor(
    public email: string,
    public name: string,
    private userId: number
  ) {}

  // that method is also not accessable outside the class
  private deleteToken() {
    console.log("Token Deleted");
  }

  get getAppleEmail(): string {
    return `apple ${this.email}`;
  }

  // used for accessing the value of private
  //  and public variables that is not accessable simple

  //########getter
  get courseCount(): number {
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
