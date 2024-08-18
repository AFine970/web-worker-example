function setupWebWorker() {
  const isDev = import.meta.env.DEV;
  const worker = isDev
    ? new Worker("./worker.ts", { type: "module" })
    : new Worker("./worker.js");

  // suppest async/await
  return (message: number) => {
    return new Promise<number>((resolve, reject) => {
      if (window.Worker) {
        worker.onmessage = (e) => {
          resolve(e.data);
          console.log("calculate done.");
        };
        worker.onerror = (e) => {
          reject(e.error);
        };
        console.log("start calculate...");
        worker.postMessage(message);
      } else {
        reject(Error("Sorry, your browser does not suppust web worker."));
      }
    });
  };
}

const workerHandler = setupWebWorker();

(async () => {
  window.bindClickEvt = async (n: number) => {
    const result = await workerHandler(n);
    const wrapper = document.getElementById("calu-wrapper");
    if (wrapper) {
      wrapper.innerText = result.toString();
    }
  };
})();
