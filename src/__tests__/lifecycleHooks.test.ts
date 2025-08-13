import { describe, it, beforeAll, afterAll, beforeEach, afterEach, expect } from "vitest";

beforeEach(() => {
  console.log("Running beforeEach hook");
});

describe("Testing First Describe Block", () => {
  it("Test First 1", () => {
    console.log("Running First 1 test");
    expect(true).toBe(true);
  });

  it("Test First 2", () => {
    console.log("Running First 2 test");
    expect(true).toBe(true);
  });

  describe("Nested Describe Block", () => {
    it("Test Nested 1", () => {
      console.log("Running Nested 1 test");
      expect(true).toBe(true);
    });

    it("Test Nested 2", () => {
      console.log("Running Nested 2 test");
      expect(true).toBe(true);
    });
  });
});

describe("Testing Second Describe Block", () => {
  it("Test Second 1", () => {
    console.log("Running Second 1 test");
    expect(true).toBe(true);
  });

  it("Test Second 2", () => {
    console.log("Running Second 2 test");
    expect(true).toBe(true);
  });
});
