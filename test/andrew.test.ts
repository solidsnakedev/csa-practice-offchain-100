import { expect, test} from "vitest";
import { mul } from "../src/test_Andrew.js"

test("multiplies 2 * 6 = 12", () => {
    expect(mul(2, 6)).toBe(12);
})