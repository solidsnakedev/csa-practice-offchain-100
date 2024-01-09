import * as readline from 'node:readline/promises';


export const myfunction = console.log("hello")

export function sayHello (name:string)
    { let output = "Hello " + name
      console.log (output)
    }

// export async function runHello() {
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });


// Fix
export type User = {
    name: string,
    age: number,
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
    return user
}

console.log('Users:');
// users.forEach(logPerson);

export const usersLog = users.forEach(logPerson);