import * as readline from "node:readline/promises";

export function mul(a: number, b: number) 
  { return a * b;
  }

export function sayHello()
  { let name = prompt("What's your name?");
    console.log("Hello " + name);
  }

export type User =
  { name: string
  , age: number
  , occupation: string
  };

export const users: User[] =
  [ { name: 'Max Mustermann'
    , age: 25
    , occupation: 'Chimney sweep'
  , }
    { name: 'Kate Muller'
    , age: 23
    , occupation: 'Astronaut'
    }
  ];

export function logPerson(user: User)
  { console.log(` - ${user.name}, ${user.age}`)
  }

console.log('Users:');
users.forEach(logPerson);