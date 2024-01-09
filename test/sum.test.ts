import { expect, test } from "vitest";
import { sum } from "../src/sum.js";

test("adds 1 + 2 = 3", () => {
  expect(sum(1, 2)).toBe(3);
});
