import { randomNumBetween } from "../utils/algoMethods.js";

class Post {
  #id;
  url;
  alt;
  #createdBy;
  #price;
  createdAt;
  likes = [];
  constructor(post, posts = []) {
    const { profilpic, publisher, alt, description, url, location, phone } =
      post;
    this.post = post;
    this.profilpic = profilpic;
    this.publisher = publisher;
    this.description = description;
    this.alt = alt;
    this.url = url;
    this.location = location;
    this.phone = phone;

    this.createdAt = new Date();
    this.#id = this.generateId(posts);
  }
  generateId(array) {
    const random = randomNumBetween(1_000_000, 9_999_999);
    const pic = array.findIndex((pic) => pic._id === random);
    if (pic === -1) return (this.#id = random);
    this.generateId(array);
  }

  get _id() {
    return this.#id;
  }
  get credits() {
    return this.#createdBy;
  }
  set credits(credits) {
    this.#createdBy = credits;
  }
  get price() {
    return this.#price;
  }
  set price(price) {
    if (price <= 15) return console.log("Price is too low!");
    this.#price = price;
  }
}

export default Post;
