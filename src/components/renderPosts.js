import {
  DISPLAY_MODE_THREE_POSTS,
  DISPLAY_MODE_THREE_POSTS_CONTAINER,
} from "../services/domService.js";

const renderPosts = (posts = []) => {
  DISPLAY_MODE_THREE_POSTS_CONTAINER.innerHTML = "";
  posts.map((post) => {
    const { alt, description, url, location, phone, _id , createdAt} = post;
    DISPLAY_MODE_THREE_POSTS_CONTAINER.innerHTML += `
    
    <div class="card " style="width: 18rem">
    <img
      class="card-img-top"
      style="max-height: 180px"
      src="${url}"
      alt="${alt}"
      id="more-details${_id}"
    />
    <div class="card-body h15">
      <h5 class="card-title">${alt}</h5>
      <p class="card-text" style="max-height: 60px; min-height: 60px;">${description}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${location}</li>
      <li class="list-group-item">${phone}</li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link">Massege</a>
      <a href="#" class="card-link">More details</a>
      <div
      <i class="bi bi-pencil-square cursor" id="edit${_id}"></i>
<i class="bi bi-trash3-fill cursor" id="delete${_id}"></i>
</div>    
</div>
    <div class="card-footer">
      <small class="text-muted">Last updated ${createdAt}</small>
    </div>
  </div>   
 
    `;
  });
};

export default renderPosts;
