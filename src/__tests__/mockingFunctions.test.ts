import { describe, expect, it, vi } from "vitest";

describe("Mock Function Tests", () => {
  it("should call the mock function", () => {
    const mockFunction = vi.fn();
    mockFunction();
    expect(mockFunction).toHaveBeenCalled();
  });

  it("should call the mock function 2 times", () => {
    const mockFunction = vi.fn();
    mockFunction();
    mockFunction();
    expect(mockFunction).toHaveBeenCalledTimes(2);
  });
});

describe("Mock Function with Arguments", () => {
  it("should call the mock function with specific arguments", () => {
    const mockFunction = vi.fn();
    mockFunction("arg1", "arg2");
    expect(mockFunction).toHaveBeenCalledWith("arg1", "arg2");
  });
});

describe("Mock Function with Return Value", () => {
  it("should return a specific value when called", () => {
    const mockFunction = vi.fn().mockReturnValue("mocked value");
    const result = mockFunction();
    expect(result).toBe("mocked value");
  });

  it("should return different values on subsequent calls", () => {
    const mockFunction = vi.fn().mockReturnValueOnce("first call").mockReturnValueOnce("second call");

    expect(mockFunction()).toBe("first call");
    expect(mockFunction()).toBe("second call");
  });

  it("should return undefined if not mocked", () => {
    const mockFunction = vi.fn();
    const result = mockFunction();
    expect(result).toBeUndefined();
  });

  it("should return a value based on the arguments passed", () => {
    const mockFunction = vi.fn((arg) => {
      return `Hello, ${arg}`;
    });
    const result = mockFunction("World");
    expect(result).toBe("Hello, World");
  });

  it("should handle asynchronous calls", async () => {
    const mockFunction = vi.fn().mockResolvedValue("async value");
    const result = await mockFunction();
    expect(result).toBe("async value");
  });
});
