import { TABLE_BODY } from "../services/domService.js";

const renderOnePosts = (posts = []) => {
  TABLE_BODY.innerHTML = "";
  posts.map((post, index) => {
    const { alt, description, url, location, phone, _id } = post;
    TABLE_BODY.innerHTML += `
    
    <tr>
    <td>${index + 1}</td>
    <td>
      <img
        style="max-width: 50px"
        src="${url}"
        alt="${alt}"
      />
    </td>
    <td>
      ${url}
    </td>
    <td>${alt}</td>
    <td>${description}</td>
    <td>${location}</td>
    <td>${phone}</td>
    <td><i class="bi bi-pencil-square cursor" id="edit${_id}"></i></td>
    <td><i class="bi bi-trash3-fill cursor" id="delete${_id}"></i></td>
  </tr>

    `;
  });
};

export default renderOnePosts;
