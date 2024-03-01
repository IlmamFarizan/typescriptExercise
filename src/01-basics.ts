interface Friend {
  name: string;
  phone: string;
  age: number;
}

interface Colleague {
  name: string;
  department: string;
  contact: { email: string; extension: number };
}

interface ColleagueHistory {
  current: Colleague[];
  former: Colleague[];
}

const friend1 = {
  name: "reinaldog",
  phone: "01234561",
  age: 24,
};

const friend2 = {
  name: "hentod",
  phone: "01654321",
  age: 24,
};

const friends = [friend1, friend2];
console.log(friends[0]);

const colleague1 = {
  name: "junhong",
  department: "technical",
  contact: {
    email: "junhong@weblite.com",
    extension: 121,
  },
};

const colleague2 = {
  name: "calan",
  department: "technical",
  contact: {
    email: "calan@weblite.com",
    extension: 122,
  },
};

const colleague3 = {
  name: "zach",
  department: "technical",
  contact: {
    email: "zach@weblite.com",
    extension: 123,
  },
};

export const colleagues: ColleagueHistory = {
  current: [colleague1, colleague2, colleague3],
  former: [],
};

console.log(colleagues.current[2]);
