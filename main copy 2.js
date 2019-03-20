/* Q1 -----------------------------------------------------------------*/

var obj1 = {cat: "cute"};
//Add code here


/* Q2 -----------------------------------------------------------------*/

// Update obj2 below
var obj2 = {
  moo: "bar",
  boo: "moo"
};
//another solution
var.boo = "moo"
//another solution
var[boo] = "moo"


/* Q3 -----------------------------------------------------------------*/

var a = {
  a: "cat"
};

var b = a;
a.soup = "Clam Chowder";
// what is actually happeing:
//var a = {
//     a: "cat",
//     soup: "Clam Chowder"
//   };
  
//solution:
var isEqual = a === b


/* Q4 -----------------------------------------------------------------*/

var zestyObject = {};
var spicyObject = {};

var bar = 2 + 2;

zestyObject.bar = "four"
spicyObject[bar] = "four"

zestyObject.bar

// Replace /*?*/ with correct values
// . and [] notation do the same thing but are not equal
var dot = zestyObject[4] === undefined
var bracket = spicyObject[4] === "four"


/* Q5 -----------------------------------------------------------------*/

//Write a function named `reverseProperties` that switches all the properties 
//and values in an object. For example, `reverseProperties({"a": "b", c: "d"})` 
//=> {"b": "a", d: "c"}. Assume that all input objects have no nesting.

var data = {"a": "b", "c": "d"};

 function reverseProperties(obj) {
     //write in code here
      for (var key in obj) {
          //key: value
          //value:obj[key]
          //console.log(obj.[key])

        //create a new key whose name is value
        //add new propert with key/value reversed
        obj[obj[key]] = key
        
        delete obj[key]  
      }
  return newObj
  }
  
  reverseProperties(data)
  
  data




/* Q6 -----------------------------------------------------------------*/

var fakeCarDealerData = {
  "dealerId": 34,
  "cars": ["Mazda", "Toyota", "Hyundai"],
  "employees": {
    "managers": [{
        "name": "Steve",
        "role": "Car Manager"
      },
      {
        "name": "Bill",
        "role": "Floor Manager"
      }
    ],
    "interns": [{
        "name": "Sheila",
        "role": "Tech Intern"
      },
      {
        "name": "Barb",
        "role": "Car Intern"
      }
    ]
  }
}

// Replace /*?*/ with correct values
var dealerId = fakeCarDealerData.dealerId === 34
var secondCar = fakeCarDealerData.cars[1] === "Toyota"
var managerName = fakeCarDealerData.employees.managers[0].name === "Steve"
var numOfInterns = fakeCarDealerData.employees.interns.length === 2


/* Q7 -----------------------------------------------------------------*/


function getCharacterNumbers(str) {
  // Write code here
}