import { describe, expect, it, vi } from "vitest";
import { doSomeCalculation } from "../services/testService";
import { add, subtract } from "../utils/utils";

vi.mock("../utils/utils.ts", () => ({
  add: vi.fn(),
  subtract: vi.fn(),
}));

describe("Testing Test Service", () => {
  it.only("should fetch user status as admin", async () => {
    vi.mocked(add).mockReturnValue(100);
    vi.mocked(subtract).mockReturnValue(20);

    const status = doSomeCalculation(3, 2);
    expect(status).toBe("Sum: 100, Difference: 20");
  });
});
