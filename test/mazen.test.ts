import { expect, test } from "vitest";
import { sum } from "../src/sum.js";
import { User, logPerson, users } from "../src/test_Mazen.js";

test("Adds 1 and 2", () => {
  expect(sum(1, 2)).toBe(3);
});

test("Log Person", () => {
  const myuser : User = {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep'
  }
  const myuser2 : User = {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep'
  }
    expect(logPerson(users[0])).toStrictEqual(myuser);
});

