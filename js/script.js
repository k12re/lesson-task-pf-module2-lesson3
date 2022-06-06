//Question 1

var product = {
  name: "Chicken feet",
  price: 149.99,
};
console.log(product.price);

//or

var productPrice = product.price;
console.log(productPrice);

//Question 2

var animals = [
  {
    type: "cat",
    colour: "black",
  },
  {
    type: "elephant",
    colour: "grey",
  },
  {
    type: "dog",
    colour: "brown",
  },
  {
    type: "zebra",
    colour: "black and white",
  },
];

for (var i = 0; i < animals.length; i++) {
  var animal = animals[i];
  var animalColour = animal.colour;

  console.log(animalColour);
}

//or

for (var i = 0; i < animals.length; i++) {
  console.log(animals[i].colour);
}

//Question 3

var dinnerOptions = [
  {
    name: "Fish and Dips",
    price: 11.95,
    onSpecial: true,
  },
  {
    name: "Bacon and Frogs",
    price: 12.99,
    onSpecial: false,
  },
  {
    name: "Mince Flies",
    price: 19.0,
    onSpecial: true,
  },
];

for (var i = 0; i < dinnerOptions.length; i++) {
  var dish = dinnerOptions[i];
  var specials = dish.onSpecial;

  if (dish.onSpecial /* === true*/) {
    //without comment is shorthand
    console.log(dish.name);
  }
}

//Question 4

var people = [
  {
    firstName: "Burt",
    lastName: "Smacharach",
    age: 35,
  },
  {
    firstName: "Elvis",
    lastName: "Deadly",
    age: 55,
  },
  {
    firstName: "Susan",
    lastName: "Sarongson",
    age: 42,
  },
  {
    firstName: "Big",
    lastName: "Gabe",
    age: 20,
  },
];

for (var i = 0; i < people.length; i++) {
  var person = people[i];
  var fullName = person.firstName + " " + person.lastName;

  if (person.age >= 20 && person.age <= 50) {
    console.log(fullName);
  }
}

//Question 5

var products = [
  {
    name: "Elephant eggs",
    price: 45.0,
  },
  {
    name: "Bucket of water",
    price: 459.99,
  },
  {
    name: "4 cabbages",
    price: 500.95,
  },
];

var productsList = document.querySelector("ul");

for (var i = 0; i < products.length; i++) {
  var item = products[i];
  //console.log(item.name);
  //console.log(item.price);
  productsList.innerHTML += "<li>" + item.name + " - " + item.price + "</li>";
}

//or

var productsList = document.querySelector("ul");

for (var i = 0; i < products.length; i++) {
  var items = products[i].name + " - " + products[i].price;
  productsList.innerHTML = productsList.innerHTML + "<li>" + items + "</li>";
}
