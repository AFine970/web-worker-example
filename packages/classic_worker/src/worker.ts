importScripts("fibonacci-lib.iife.js");

self.onmessage = (e) => {
  const data = e.data || 0;
  const result = self.FibonacciDynamicLib.fibonacciDynamic(data);
  self.postMessage(result);
};
