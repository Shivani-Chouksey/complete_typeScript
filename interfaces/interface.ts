// Give a overview the deatils what needed

interface loginDetail {
  readonly dbId: number;
  email: string;
  password: number;
  userId?: number;
  //   startTrail: () => string;   // way 1
  startTrail(): string; // way 1
  getCoupan(name: string, value: number): number;
}

const hitesh: loginDetail = {
  dbId: 34654,
  email: ".com",
  password: 66565,
  startTrail: () => {
    return "trail started";
  },
  getCoupan: (name: "chouksey", value: 12) => {
    return 10;
  },
};
