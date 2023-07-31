let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

// You need to help me fixup the largeCountries array so that
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()
console.log(largeCountries);
// Remove the first Element of the Array [Tuvalu]
largeCountries.shift();
console.log(largeCountries);

// Add China Element at the begining of an array [China]
largeCountries.unshift("China");
console.log(largeCountries);

// Remove the last Element of the array [Monaco]
largeCountries.pop();
console.log(largeCountries);

// Add new element into an array [Pakistan]
largeCountries.push("Pakistan");
console.log(largeCountries);
