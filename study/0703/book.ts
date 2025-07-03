class Book {
  title: string;
  author: string;
}
let book = new Book();
book.title = "책1";
book.author = "스티브 잡스";
let book2 = new Book();
book2.title = "책2";
book2.author = "빌 게이츠";
let book3 = new Book();
book3.title = "책3";
book3.author = "레이 달리오";

let books = [book, book2, book3];
let books2 = Array<Book>();
books2.push(book);
books2.push(book2);
books2.push(book3);

for (let i = 0; i < books.length; i++) {
  console.log(
    `책 이름은 : ${books[i].title}, 저자는 ${books[i].author}입니다.`
  );
}
