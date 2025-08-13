import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import useCounter from "../useCounter";
import { act } from "react";

describe("Testing Counter Hook", () => {
  it("The counter should initialize with a default value of 0", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  it("The counter should initialize with a custom value if provided", () => {
    const { result } = renderHook(() => useCounter(5));
    expect(result.current.count).toBe(5);
  });

  it("The counter should update the count when increment is called", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

  it("The counter should update the count when decrementis called", () => {
    const { result } = renderHook(() => useCounter(5));
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(4);
  });

  it("The counter should increment the count correctly on multiple calls", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(0);
  });
});
