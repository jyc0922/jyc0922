var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
var Order = /** @class */ (function () {
    function Order() {
    }
    Order.prototype.summary = function () {
        console.log("\uC0AC\uC6A9\uC790 ".concat(this.user.username, " \uACE0\uAC1D\uB2D8\uC774 \uC0C1\uD488").concat(this.product.productName, "\uC744 \uC8FC\uBB38\uD588\uC2B5\uB2C8\uB2E4."));
    };
    return Order;
}());
var user = new Customer();
user.username = "홍길동";
var product = new Product();
product.productName = "책";
var order = new Order();
order.user = user;
order.product = product;
order.summary();
