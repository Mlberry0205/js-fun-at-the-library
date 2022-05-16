function shelfBook(book, shelf) {

 if (shelf.length < 3) {
 var shifted = shelf.unshift(book)
  return shifted
 }
}



module.exports = {
  shelfBook,
  // unshelfBook,
  // listTitles,
  // searchShelf
};
