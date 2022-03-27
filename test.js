globalThis.onunhandledrejection = function(ev) {
  ev.preventDefault();
  // ev.promise.then(() => 'Hello from the other side')
  console.warn("Unhandled rejection", ev);
};

;(async () => {
  return Promise.reject(new Error('Error'))
})();
// new Promise(() => {
//   throw new Error("Error");
// });