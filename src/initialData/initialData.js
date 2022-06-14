import Picture from "../models/PictureModel.js";
import Post from "../models/postsModel.js";
import User from "../models/UserModel.js";
// import Post from "../models/PostModel.js";
// const createdAt = new Post().createdAt
const initialData = () => {
  const data = {
    pictures: [
      {
        url: "https://media.istockphoto.com/photos/low-angle-view-group-of-volunteers-busy-working-by-arranging-and-on-picture-id1318617341?s=612x612",
        alt: "donation",
        credits: "Gorge W Bosh",
      },
      {
        url: "https://media.istockphoto.com/photos/volunteers-packing-donation-boxes-picture-id1358239967?s=612x612",
        alt: "donation2",
        credits: "Jessica Rabbit",
      },
      {
        url: "https://cdn.pixabay.com/photo/2014/12/04/02/53/give-and-take-556151_960_720.jpg",
        alt: "sign",
        credits: "Tyra Banks",
      },
      {
        url: "https://media.istockphoto.com/photos/boy-share-ice-cream-with-his-sister-picture-id957740086?s=612x612",
        alt: "kids with ice cream",
        credits: "Tyra Banks",
      },
    ],
    users: [
      {
        name: { first: "regular", last: "user" },
        address: {
          state: "USA",
          country: "big",
          city: "New York",
          street: "52",
          houseNumber: "109",
          zip: 562145,
        },
        phone: "050-0000000",
        email: "user@gmail.com",
        password: "Aa1234!",
        isBusiness: false,
      },
      {
        name: { first: "bUsiness", last: "user" },
        address: {
          state: "USA",
          country: "cal",
          city: "New Jersey",
          street: "bird",
          houseNumber: "54",
          zip: 123456,
        },
        phone: "050-0000000",
        email: "business@gmail.com",
        password: "Aa1234!",
        isBusiness: true,
        isAdmin: false,
      },
      {
        name: { first: "admin", last: "user" },
        address: {
          state: "Israel",
          country: "Israel",
          city: "Tel Aviv",
          street: "",
          houseNumber: "",
          zip: 0,
        },
        phone: "050-0000000",
        email: "admin@gmail.com",
        password: "Aa1234!",
        isBusiness: true,
        isAdmin: true,
      },
    ],
    posts: [
      {
        profilpic:
          "https://cdn.pixabay.com/photo/2021/11/09/10/36/boy-6781192_960_720.jpg",
        publisher: "Tyra Banks",
        alt: "donuts",
        description: "ten donuts made today",
        url: "https://cdn.pixabay.com/photo/2018/05/12/12/55/donat-3393222_960_720.jpg",
        location: "Ramat Gan",
        phone: "0503455434",
        publisher: "Yakov",
        createdAt: "Date",
      },
      {
        profilpic:
          "https://cdn.pixabay.com/photo/2016/11/21/14/53/man-1845814_960_720.jpg",
        publisher: "Adam",
        alt: "Medicin",
        description: "Nurofen and Optalgin, expired next month",
        url: "https://cdn.pixabay.com/photo/2016/11/23/15/03/medications-1853400_960_720.jpg",
        location: "Mitspe",
        phone: "0503455434",
        publisher: "Simi",
        createdAt: "Date",
      },
      {
        profilpic:
          "https://media.istockphoto.com/photos/cheerful-smiling-young-man-portrait-picture-id624652254?s=612x612",
        publisher: "Jhon",
        alt: "vegitibles",
        description: "Good vegtibles, I dont have a use for them ",
        url: "https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_960_720.jpg",
        location: "Holon",
        phone: "0503455434",
        publisher: "Yanay",
        createdAt: "Date",
      },
    ],
  };

  const pictures = data.pictures.map((picture, index, pictures) => {
    return new Picture(picture, pictures);
  });

  const users = data.users.map((user, index, users) => {
    return new User(user);
  });

  const posts = data.posts.map((post, index, posts) => {
    return new Post(post, posts);
  });

  return { pictures, users, posts };
};

export default initialData;
