interface Book {
 title : string;
 author : string;
 publishedYear :number;
 isAvailable :boolean;

}

const printBookDetails  = (book:Book): void=>{
console.log(`Title: ${book.title}`)
}

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);