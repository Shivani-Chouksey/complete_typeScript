// union type means combination of two or three or lot of types of data  that include arry, string, number and more
// using pipe sig " | " for define that

let score: number | string = 33;
score = 44;
score = "55";

//create own types
type Userdata = {
  name: string;
  id: number;
};
type Admin = {
  name: string;
  id: number;
};

let MyObject: Userdata | Admin = { name: "name", id: 554 };

function getDbId(id: number | string) {}

const data1: string[] = ["fdf", "fdf"];
const data2: number[] = [1, 2, 3];
const combineTypeData: (string | number | boolean)[] = ["dsdas", 454, true];
