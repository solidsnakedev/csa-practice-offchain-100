
import * as readline from "node:readline/promises"
import {stdin as input, stdout as output} from "node:process"




export const sayHello = () => {
    let name = prompt("what's your name?")
    console.log("Hello " + name);
}
export function sayHello2() {
    let name = prompt("what's your name?")
    console.log("hello " + name);
    
}




// Fix
export type User = {
    name: string,
    age: number,
    occupation: string
};

class UserObject {
    name: string;
    age: number;
    occupation: string;

    constructor(name:string, age:number,occupation:string) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }
}



export const users: UserObject[] = [
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

export function logPerson(user: UserObject) {
    console.log(` - ${user.name}, ${user.age}`);
}

export function getUserName(user: User) {
    return user.name
}

console.log('Users:');
users.forEach(logPerson);