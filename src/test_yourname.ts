// Arrow function
export const myfunction = () => console.log("hello");

// Normal syntax
export function myfunction2() {
  console.log("myfunction2");
}

// Fix
// export type User = unknown;

// export const users: unknown[] = [
//     {
//         name: 'Max Mustermann',
//         age: 25,
//         occupation: 'Chimney sweep'
//     },
//     {
//         name: 'Kate Müller',
//         age: 23,
//         occupation: 'Astronaut'
//     }
// ];

// export function logPerson(user: unknown) {
//     console.log(` - ${user.name}, ${user.age}`);
// }

// console.log('Users:');
// users.forEach(logPerson);