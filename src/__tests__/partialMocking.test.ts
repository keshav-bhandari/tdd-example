import { describe, expect, it, vi } from "vitest";
import { doSomeCalculation } from "../services/testService";
import { add } from "../utils/utils";

vi.mock("../utils/utils.ts", async () => {
  const actual = await vi.importActual<typeof import("../utils/utils")>("../utils/utils.ts");

  return {
    ...actual,
    add: vi.fn(), // only mocking add
  };
});

describe("Testing Test Service (Partial Mock)", () => {
  it("should use mocked add and real subtract", async () => {
    vi.mocked(add).mockReturnValue(100); // mocked value
    const result = doSomeCalculation(3, 2);

    // subtract(3,2) = 1
    expect(result).toBe("Sum: 100, Difference: 1");
  });
});
