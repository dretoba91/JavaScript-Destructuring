'use strict';

/*
// Destructuring

// ARRAY DESTRUCTURING

let arr = ['John', 'Smith', 'Walid'];

// let [firstname, surname] = arr;
let [firstname, surname] = 'John Smith'.split(' ');
console.log(firstname, surname);

// Ignore elements using commas

// let [firstName, , title, country] = ["Julius", "Caesar", "Consul", "of the Roman Republic"]
// console.log(title, country);

// Works with any iterable on the right-side

let [a, b, c] = "abc";
console.log([a,b,c]);

let [one, two, three] = [1, 2, 3];
console.log([one, two, three]);

// Assign to anything at the left-side

let user = {};
[user.name, user.surname] = "John Smith".split(' ');
console.log(user.name, user.surname);

// Swap variables trick
// 
let admin = 'Jane';
let guest = 'Peter';

// Let's swap the values: make guest=Pete, admin=Jane
[guest, admin] = [admin, guest];
console.log(`guest: ${guest} admin: ${admin}`);

// The rest ‘…’  [Rest pattern]

let [name1, name2, ...detials] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(name1, name2, detials);

// Default values 
// If the array is shorter than the list of variables at the left, there’ll be no errors. Absent values are considered undefined:

let [firstName, surName] = [];
// the result will be undefined
console.log(firstName, surName);

// If we want a “default” value to replace the missing one, we can provide it using =
let [name = 'Guest', suRname = 'Anonymous'] = ['Julius'];
console.log(name, suRname);

*/

/*

// // Object Destructuring
// We should have an existing object at the right side, that we want to split into variables. The left side contains an object-like “pattern” for corresponding properties. In the simplest case, that’s a list of variable names in {...}.

// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200
// };

// let {title, width, height} = options;
// console.log(title,width,height);

// the property name can be change

// let {width: w, height: h, title} = options;
// console.log(title,w,h);

// For potentially missing properties we can set default values using "="

// let options1 = {
// 	title: "Menu"
// };

// let {width = 300, height = 200, title} = options1;
// console.log(width,height,title);

// NB: We also can combine both the colon and equality

// let options2 = {
// 	title: "Menu"
// };

// let {width: w = 300, height: h = 200, title} = options2;
// console.log(h,w,title);
// 
// 
// // // The rest pattern “…”
// What if the object has more properties than we have variables? Can we take some and then assign the “rest” somewhere?
// We can use the rest pattern, just like we did with arrays.

// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200
// };

// // using the rest pattern (...)

// let {title, ...measurement} = options;
// console.log(title,measurement);

//// without using the 'let' word for initialization, it will throw an error. But there is a way out by enclose the code on the left into a bracket.

let title, width, height;

// this will throw error
// {title, width, height} = {title: "Menu", width: 100, height: 200};

// this will work
({title, width, height} = {title: "Menu", width: 100, height: 200});
console.log(title, width, height);

*/

/* 

// // // Nested destructuring // //
// If an object or an array contain other nested objects and arrays, we can use more complex left-side patterns to extract deeper portions.

let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};

// destructuring this object

let {size: {width, height}, items: [item1, item2], title = 'Profile',} = options;
console.log(width, height,item1, item2,title);

// Note that there are no variables for size and items, as we take their content instead.
*/

/* 

/// // // Smart function parameters /// ///
/// 

// There are times when a function has many parameters, most of which are optional. That’s especially true for user interfaces.
// Destructuring comes to the rescue!
// We can pass parameters as an object, and the function immediately destructurizes them into variables

// let options = {
//   title: "My menu",
//   items: ["Item1", "Item2"]
// };

// ...and it immediately expands it to variables

// function showMenu({title = "Untitled", width = 100, height = 200, items = []}) {
// 	// console.log(`${title}, ${width}, ${height}`, items);
// 	console.log(title, items, width, height);
// }

// showMenu(options);

// We can also use more complex destructuring with nested objects and colon mapping
// The full syntax is the same as for a destructuring assignment:

// function({
//   incomingProperty: varName = defaultValue
//   ...
// })

// Please note that such destructuring assumes that showMenu() does have an argument. If we want all values by default, then we should specify an empty object:
function showMenu ({ title = "Menu", width = 100, height = 200 } = {}) {
	console.log(title, width, height);
}
showMenu();

*/


/// /// /// TASKs /// /// 

let user = {
  name: "John",
  years: 30
};

// 1. Write the destructuring assignment that reads:

// i. name property into the variable name.
// ii. years property into the variable age.
// iii. isAdmin property into the variable isAdmin (false, if no such property)

// solution
// Use Object.entries and destructuring to iterate over key/value pairs.

let {name, years , isAdmin = false} = user;
console.log(name, years, isAdmin);

// 2. 

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

// function topSalaries (salaries) {
// 	let maxSalary = 0;
// 	let maxName = null;

// 	for (const [name, salary] of Object.entries(salaries)) {
// 		if (maxSalary < salary) {
// 			maxSalary = salary;
// 			maxName = name;
// 		}
// 	}

// 	return maxName;
// } 
// 
// OR 
// 
function topSalary(salaries) {
return Object.keys(salaries).reduce((max, s) => salaries[max] > salaries[s] ? max : s);
}
console.log(topSalary(salaries));