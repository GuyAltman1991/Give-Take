import {
  MORE_DETAILS_POST_PAGE,
  MORE_DETAILS_HEADLINE,
} from "../services/domService.js";
const renderMoreDetailsPage = (posts = []) => {
  MORE_DETAILS_POST_PAGE.innerHTML = "";
  MORE_DETAILS_HEADLINE.className = "d-block";
  posts.map((post) => {
    const {
      alt,
      description,
      url,
      location,
      phone,
      _id,
      publisher,
      createdAt,
    } = post;
    MORE_DETAILS_POST_PAGE.innerHTML += `
      


  <div class="center">
    <div class="form col-12 col-md-10 col-xl-8 border p-2 rounded mb-2">
      <img
        id="more-details-post-display"
        src="${url}"
        alt="..."
        class="img-thumbnail "
        style = ""
      />
    </div>
  </div>

  <div class="center">
    <form class="form col-12 col-md-10 col-xl-8 border p-2 rounded">
      <div>
        <h3>${alt}</h3>
        <p>Description: ${description}</p>
        <p>Location: ${location}</p>
        <p>Phone number: ${phone}</p>
        <p>Created at: ${createdAt}</p>
        <p>published by: ${publisher}</p>
        <p>ID: ${_id}</p>

      </div>
    </form>
  </div> 
   
      `;
  });
};

export default renderMoreDetailsPage;
