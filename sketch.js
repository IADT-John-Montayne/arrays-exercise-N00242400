let basket = ["apple", "banana", "orange", "grape"]; 

// log the first fruit
console.log("First fruit:", basket[0]);

// check if "orange" exists and log its index
let orangeIndex = basket.indexOf("orange"); 
if (orangeIndex !== -1) { 
  
    console.log("Orange found at index ", orangeIndex);
} else {
    // if orangeIndex is -1 (orange not found)
    console.log("Orange not found");
}

// log the last fruit

// basket.length = 4  minus 1 lastIndex = 3
let lastIndex = basket.length - 1;
console.log("Last fruit:", basket[lastIndex]);

//modify basket

// find the index of "banana"
let bananaIndex = basket.indexOf("banana");

// check if banana exists
if (bananaIndex !== -1) {
    // Replace banana with kiwi
    basket[bananaIndex] = "kiwi";
}

// remove the last fruit
basket.pop();

// add "mango" to the start
basket.unshift("mango");

//looping throigh basket

// Use a for loop to go through each fruit
// i starts at 0 (first index)
// i < basket.length stops at last item 
//  basket[i] gets the fruit at the current index

for (let i = 0; i < basket.length; i++) {
  console.log(`Fruit ${i + 1}: ${basket[i]}`);
}

// slice the middle two fruits (apple and kiwi)
let middleStart = Math.floor(basket.length / 2) - 1; // 4/2=2-1=1
let citrus = basket.slice(middleStart, middleStart + 2);

// let citrus = basket.slice(1, 3); 

//log the new citrus array
console.log("Citrus array:", citrus);
//basket did not change
console.log("Original basket:", basket);