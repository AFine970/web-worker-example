import { fibonacciDynamic } from './lib';

self.onmessage = (e) => {
  const data = e.data || 0;
  const result = fibonacciDynamic(data);
  self.postMessage(result);
};
