// NG
Promise.reject("something bad happened");
Promise.reject();

// OK
Promise.reject(new Error("something bad happened"));
Promise.reject(new TypeError("something bad happened"));