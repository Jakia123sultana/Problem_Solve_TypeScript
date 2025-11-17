var printBookDetails = function (book) {
    console.log("Title: ".concat(book.title, ", Author: ").concat(book.author, ", Published: ").concat(book.publishedYear, ", Available: ").concat(book.isAvailable ? 'Yes' : 'No'));
};
var myBook = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    isAvailable: true,
};
printBookDetails(myBook);
