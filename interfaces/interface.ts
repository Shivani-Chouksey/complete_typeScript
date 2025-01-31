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

// if add additional detail , it is also a good to add additonal value inside existing interface
interface loginDetail {
  githubId: string;
}

//inheritance
interface AdminDetail extends loginDetail {
  role: "admin" | "ta";
}

const hitesh: loginDetail = {
  dbId: 34654,
  email: "gmail.com",
  githubId: "githubId",
  password: 66565,
  startTrail: () => {
    return "trail started";
  },
  getCoupan: (name: "chouksey", value: 12) => {
    return 10;
  },
};

const chouksey: AdminDetail = {
  dbId: 34654,
  role: "admin",
  email: "gmail.com",
  githubId: "githubId",
  password: 66565,
  startTrail: () => {
    return "trail started";
  },
  getCoupan: (name: "chouksey", value: 12) => {
    return 10;
  },
};
