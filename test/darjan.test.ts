import { expect, test } from "vitest";
import { returnNum } from "../src/test_Darjan.js";

test("adds 1 + 2 = 3", () => {
  expect(returnNum(12)).toBe(12);
});