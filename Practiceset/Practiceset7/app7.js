// 1.Create object to represent a product from Myntra
// 2.Create an Object with two references and log changes to one object by changing the other one.
// 3.Use bracket notation to display delivery-time.
// 4.Given an object {message: 'good job', status: 'complete'}, use de-structuring to create two variables message and status.
// 5.Add function isIdenticalProduct to compare two product objects.

let product = {
  size: "S",
  name: "Jeans",
  fit: "Slim Fit",
  "delivery-time": "Same day delivery",
};

let copyProduct = product;
console.log(product);
copyProduct.size = "M";
console.log(product);
copyProduct.size = "Regular Fit";
console.log(product);

console.log(product["delivery-time"]);

let obj = {
  message: "Good Job",
  status: "Complete",
};
console.log(obj);

let { message, status } = obj;
console.log(message);
console.log(status);

function isIdenticalProduct(product1, product2) {
  if (typeof product1 !== "object" || typeof product2 !== "object") {
    console.warn("Parameter passed was not an object");
    return false;
  }
  if (product1 == product2) {
    return true;
  }
  if (
    product1.name === product2.name &&
    product1.size === product2.size &&
    product1.fit === product2.fit
  ) {
    return true;
  } else {
    return false;
  }
}

let product2 = {
  size: "M",
  name: "Jeans",
  fit: "Slim Fit",
  "delivery-time": "Same day delivery",
};
let product3 = {
  size: "M",
  name: "Jeans",
  fit: "Slim Fit",
  "delivery-time": "Same day delivery",
};

console.log(isIdenticalProduct(product, product2));
console.log(isIdenticalProduct(product, " "));
console.log(isIdenticalProduct(product, product));
console.log(isIdenticalProduct(product2, product3));
console.log(isIdenticalProduct(product3, product2));
