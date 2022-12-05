// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.
// My function should be able to take a string and only change the values for the letters a,e,i and o.
// I moved the jest test up here for functionality
// Expected output: "L4ck4d41s1c4l"
// Expected output: "G0bbl3dyg00k"
// Expected output: "3cc3ntr1c"
// a) Create a test with expect statements using the variables provided.
// now i show that i can conquer jest
describe("codeMsg", () => {
  // I moved the variables ahead of my function in order for there to be no problems of initilization
  const secretCodeWord1 = "Lackadaisical";
  const secretCodeWord2 = "Gobbledygook";
  const secretCodeWord3 = "Eccentric";
  it('returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.', () => {
    expect(codeMsg(secretCodeWord1)).toEqual("L4ck4d41s1c4l");
    expect(codeMsg(secretCodeWord2)).toEqual("G0bbl3dyg00k");
    expect(codeMsg(secretCodeWord3)).toEqual("3cc3ntr1c");
  });
});
// It's... so... beautiful!
// this took me a while to figure out. i did some research to see how i can change a specific value to whatever i want and found the .replace(v, v) this does that.

//named my function and new it had to iterate thru a string.
const codeMsg = (string) => {
  // I created an empty array to work with
  let newString = [];
  // now the hard part.. I knew i need a conditional statement that would change the desired value to what we want, but couldn't figure out an easier way to do this with less statements.. so, i just made one for each instance.
  for (let i = 0; i < string.length; i++) {
    //if its an "a" make it a 4 in my new array
    if (string[i].toLowerCase().includes("a")) {
      newString.push(string[i].toLowerCase().replace("a", 4));
      //if its an "e" make it a 3 in my new array
    } else if (string[i].toLowerCase().includes("e")) {
      newString.push(string[i].toLowerCase().replace("e", 3));
      //if its an "i" make it a 1 in my new array
    } else if (string[i].toLowerCase().includes("i")) {
      newString.push(string[i].toLowerCase().replace("i", 1));
      //if its an "o" make it the number 0 in my new array
    } else if (string[i].toLowerCase().includes("o")) {
      newString.push(string[i].toLowerCase().replace("o", 0));
      // And the important one.. if it's not any of the ones i'm looking for, then just add it to the new array unchanged.
    } else {
      newString.push(string[i]);
    }
  }
  //now i want to return the array as a "string"
  return newString.join("");
};
// and Bam!
//console.log(codeMsg("AEIO"));

// b) Create the function that makes the test pass.
// I also made it to work with upper cased letters.

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.
// I think my function will take two arguments and make a new array with only the fruits that contain a specific letter
// a) Create a test with expects statement using the variable provided.
// Expected output: ["Mango", "Apricot", "Peach"]
// Expected output: ["Cherry", "Blueberry", "Peach"]
describe("fruitFunc", () => {
  const fruitArray = [
    "Mango",
    "Cherry",
    "Apricot",
    "Blueberry",
    "Peach",
    "Kiwi",
  ];
  const letterA = "a";
  const letterE = "e";
  it("returns an array of all the words containing that particular letter", () => {
    expect(fruitFunc(fruitArray, letterA)).toEqual([
      "Mango",
      "Apricot",
      "Peach",
    ]);
    expect(fruitFunc(fruitArray, letterE)).toEqual([
      "Cherry",
      "Blueberry",
      "Peach",
    ]);
  });
});
// Look ma! No hands!
//created the function that takes in two arguments
const fruitFunc = (array, ltr) => {
  // created the new array that will be populated with the requested values
  let newFruitArray = [];
  for (let i = 0; i < array.length; i++) {
    // the function will look thru the array and make the value of the current index lowercase in order to check if the value requested is included
    if (array[i].toLowerCase().includes(ltr)) {
      // if it is push it to the new array.
      newFruitArray.push(array[i]);
    }
  }
  // and return the new array
  return newFruitArray;
};
// Bam!
//console.log(fruitFunc(fruitArray, "m"));

// b) Create the function that makes the test pass.

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.
// This sounds like the function should take into accountability all of the values in the array.
// a) Create a test with expect statements using the variable provided.
// Expected output: true
// Expected output: false
// Expected output: false
// Expected output: true
describe("dealer", () => {
  const hand1 = [5, 5, 5, 3, 3];
  const hand2 = [5, 5, 3, 3, 4];
  const hand3 = [5, 5, 5, 5, 4];
  const hand4 = [7, 2, 7, 2, 7];
  it("determines whether or not the array is a full house", () => {
    expect(dealer(hand1)).toEqual(true);
    expect(dealer(hand2)).toEqual(false);
    expect(dealer(hand3)).toEqual(false);
    expect(dealer(hand4)).toEqual(true);
  });
});
// looks good! all three tests ran and passed succesfully!
// named the function dealer, because its going to do the job of a dealer.
const dealer = (array) => {
  // created a count to keep track of how many times a value repeats in an array.
  let count1 = {};
  // used a For of loop in order to check the value and keep track of how many times it is used
  for (let x of array) {
    count1[x] = (count1[x] || 0) + 1;
  }
  // I am using the Object.values method to look into the count1 we created and see if there is 3 of a kind and a pair that was tracked.
  let count = Object.values(count1);
  if (
    (count[0] === 2 && count[1] === 3) ||
    (count[1] === 2 && count[0] === 3)
  ) {
    // If there is it returns true
    return true;
  } else {
    return false;
  }
};
// and Bam!
//console.log(dealer([1, 2, 2, 1, 2]));

// b) Create the function that makes the test pass.
