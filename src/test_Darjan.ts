type Message = string

const functionOutput:   Message = "Darjan - Message Ouput 1: hello"
const functionOutput2:  Message = "Darjan - Message Ouput 2: function2"

enum CardinalDicrections {
    North = "North",
    East = "East",
    South = "South",
    West = "West"
}

class Person {
    // Firstname not initialized, but no error
    firstname!: string;
    // Surname has to be initialized in the constructor
    surname: string;

    constructor() {
        this.surname = "Fikic";
    }
}
const person1 = new Person();
person1.surname = "Jane";


// Arrow function
export const myfunction = () => console.log(functionOutput);

export const myFunction2 = () => myfunction3(functionOutput2)

// Normal syntax
export function myfunction3(msgOutput: Message) {
    console.log(msgOutput);
    console.log(CardinalDicrections.North);
}

// Fix
export type User = {
    name: string,
    age: number
    occupation: string
};

export const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

export function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

export const usersLog = users.forEach(logPerson);

function printStatusCode(code: string | number) {
    console.log(`My status code is ${code}.`)
}
export const printStatusCodeError = () => printStatusCode(404);
export const printStatusCodeNoError = () => printStatusCode('404');