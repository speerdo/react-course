// const square = function (x) {
// return x * x;
// };

// const squareArrow = (x) => {
// return x * x;
// };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(9));

// const getFirstName = (fullName) =>
//   fullName ? fullName.split(" ")[0] : "Please enter a name";
// console.log(getFirstName("Adam Speer"));

// const add = function (a, b) {
//   return a + b;
// };

const add = (a, b) => a + b;

console.log(add(55, 1));

const user = {
  name: 'Adam',
  cities: ['Joplin', 'Columbia', 'Kansas City', 'Indianapolis'],
  printPlacesLived() {
    return this.cities.map((city) => `${this.name} has lived in ${city}`);
  },
};

console.log(user.printPlacesLived());

// Challenge

const multiplier = {
  arr: [2, 4, 6, 8],
  multi: 3,
  multiply() {
    return this.arr.map((num) => num * this.multi);
  },
  // method multiply return a new array that has numbers mulitplied
};

console.log(multiplier.multiply());
