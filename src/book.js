

//1. describe("book.js")= We are running tests on the file book.js
//      Creates a group of tests for the book.js file
//      Its an isolated test of this entire file

//2. In the file book.js, we have several functions we want to test

//3. describe("createTitle")= We are running tests on the function "createTitle"
//    Everytime we see "it", that is an individual test for the function "createTitle"
//    When we see it(...text here...) this is basically the instructions for what the function should do
//    when we see "assert._something_()" this is the test itself
//    ex: assert.equal(something, what it should equal)


// test1, instructions: should be a function
// test1, test: Testing if createTitle is indeed a function with the isFunction() method

// test2, instructions: should take a title and return a modified title
// test2, test: createTitle("Storm's Awakening") should output "The Storm's Awakening"

// test3, instructions: should be able to create many modified titles
// test3, test: createTitle(anyTitle) should output The + anyTitle
function createTitle(title) {
  return "The " + title
}

// test1 instructions: should be a function
// test1 test: Testing if buildMainCharacter is indeed a function with the isFunction() method

// test2 instructions: should create a character object
// test2 test: the output of the function: buildMainCharacter()
// is stored in the variable ghoulCharacter with name, age, pronouns parameters
// set to ghoulCharacter.name, ghoulCharacter.age, and ghoulCharacter.pronouns

function buildMainCharacter(name, age, pronouns) {
  return {name: name, age: age, pronouns: pronouns}
}

//storing the output of buildMainCharcter() in a variable lets us access and use it later
//var exampleObject = buildMainCharacter("Bob", 23, "he/him")
//console.log(exampleObject) // outputs: {name: "Bob", age: 23, pronouns: "he/him"}

// test1 instructions: should be a function
// test1 test: Testing if saveReview is indeed a function with the isFunction() method

// test2 instructions: should be able to add reviews to an array
// test2 test1: after we run saveReview with parameters "An astounding success"
//              and reviews (the empty array), reviews.length should equal 1
//              this indicates that the review was added to the empty array and is now
//              the only item in that array
// test2 test2: the array "reviews" should equal ["An astounding success"] after we run saveReview()

// test3 instructions: should be able ot add reviews to an array that already has reviews
// test3 test: Everytime we run saveReview, it should add a new review to the array
//             and not overwrite other reviews that are in the array already

// test4: instructions: should only add unique reviews
// test4 test: when we run saveReview() it should check if the review is already in the array
//             and if so, do not add it

function saveReview(review, array) {
  if (array.includes(review) === false) {
    // if array.includes(review) === true, then the review is already in the array
    // and we do not add it
      array.push(review)
  }
}

//array.includes:The includes() method returns true if an array
//contains a specified value.
//The includes() method returns false if the value is not found.
//If (array.includes(review) equals false,
//that means the review is not already in the list.
//So we add it to the list with array.push(review)
//Looked up the .includes method

function calculatePageCount(title) {

 var counter = 0
 for (var i = 0; i < title.length; i++) {
   counter = counter + 20
 }

 return counter
}

//Look up collector

//WordCount: count words in a text

function writeBook(bookTitle, character, bookGenre) {
 var book = {
   title: bookTitle,
   mainCharacter: character,
   pageCount: calculatePageCount(bookTitle),
   genre: bookGenre

};
return book
}


function editBook(book) {
  var reducesPage = (book.pageCount * .75)
  book.pageCount = reducesPage
 console.log(book.pageCount)
  return book.pageCount
}

//nothing after return will run!!

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
