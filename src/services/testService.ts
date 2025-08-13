import { add, subtract } from "../utils/utils";

export const doSomeCalculation = (a: number, b: number) => {
  const addResult = add(a, b);
  const subtractResult = subtract(a, b);
  return `Sum: ${addResult}, Difference: ${subtractResult}`;
};
