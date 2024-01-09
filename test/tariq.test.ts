import { expect, test } from "vitest";
import { User, getUserName } from "../src/test_tariq.js";

const user1: User  = {
    name: "james",
    age: 99,
    occupation: "programmer"
}

test("Name of user1", () => {
    expect(getUserName(user1)).toBe("james")
})

