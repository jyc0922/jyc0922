var Book = /** @class */ (function () {
    function Book() {
    }
    return Book;
}());
var book = new Book();
book.title = "책1";
book.author = "스티브 잡스";
var book2 = new Book();
book2.title = "책2";
book2.author = "빌 게이츠";
var book3 = new Book();
book3.title = "책3";
book3.author = "레이 달리오";
var books = [book, book2, book3];
var books2 = Array();
books2.push(book);
books2.push(book2);
books2.push(book3);
for (var i = 0; i < books.length; i++) {
    console.log("\uCC45 \uC774\uB984\uC740 : ".concat(books[i].title, ", \uC800\uC790\uB294 ").concat(books[i].author, "\uC785\uB2C8\uB2E4."));
}
