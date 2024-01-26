/**
 * 动态规划斐波那契
 */
export function fibonacciDynamic(n: number) {
  let fib = [0, 1];
  for (let index = 2; index <= n; index++) {
    fib[index] = fib[index - 1] + fib[index - 2];
  }
  return fib[n]
}
