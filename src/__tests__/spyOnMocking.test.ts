import { describe, expect, it, vi } from "vitest";
import { doSomeCalculation } from "../services/testService";
import * as utils from "../utils/utils";

describe("Testing Test Service", () => {
  it("should fetch user status as admin", async () => {
    vi.spyOn(utils, "add").mockReturnValue(100);
    vi.spyOn(utils, "subtract").mockReturnValue(20);

    const status = doSomeCalculation(3, 2);
    expect(status).toBe("Sum: 100, Difference: 20");
  });
});
