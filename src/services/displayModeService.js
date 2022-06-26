import DISPLAY from "../models/displayModel.js";
import { onChangeDisplayMode } from "../routes/router.js";
import renderPosts from "../components/renderPosts.js";
import { handleDeletPost } from "../app.js";
import { handleEditPost, handleMoreDetailsPost } from "./picService.js";
import renderOnePosts from "../components/renderPostsOne.js";

export const handleDisplayMode = (posts, display) => {
  onChangeDisplayMode(display, posts);
  if (display === DISPLAY.ONE) {
    renderOnePosts(posts);
    posts.forEach((post) => addOnDelete(post._id));
    posts.forEach((post) => addOnEdit(posts, post._id));
    posts.forEach((post) => addOnMoreDetails(posts, post._id));
  }
  if (display === DISPLAY.THREE) {
    renderPosts(posts);
    posts.forEach((post) => addOnDelete(post._id));
    posts.forEach((post) => addOnEdit(posts, post._id));
    posts.forEach((post) => addOnMoreDetails(posts, post._id));
  }
};

const addOnDelete = (id) => {
  document
    .getElementById("delete" + id)
    .addEventListener("click", () => handleDeletPost( id));
};

const addOnEdit = (posts, id) => {
  document
    .getElementById(`edit${id}`)
    .addEventListener("click", () => handleEditPost(posts, id));
};

const addOnMoreDetails = (posts, id) => {
  document
    .getElementById("more-details" + id)
    .addEventListener("click", () => handleMoreDetailsPost(posts, id));
};
