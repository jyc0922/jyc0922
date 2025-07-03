class Customer {
  username: string;
}
class Product {
  productName: string;
}
class Order {
  user: Customer;
  product: Product;
  summary() {
    console.log(
      `사용자 ${this.user.username} 고객님이 상품${this.product.productName}을 주문했습니다.`
    );
  }
}

let user = new Customer();
user.username = "홍길동";

let product = new Product();
product.productName = "책";

let order = new Order();
order.user = user;
order.product = product;

order.summary();
