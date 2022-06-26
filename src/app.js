import {
  ABOUT_LINK,
  HOME_LINK,
  LOGIN_LINK,
  GIVE_LINK,
  SLIDER_NEXT_BTN,
  SLIDER_PREV_BTN,
  SLIDER_IMAGE,
  SLIDER_CREDITS,
  DISPLAY_MODE_ONE_POST_LINK,
  DATA_CONTAINER,
  NO_DATA_CONTAINER,
  SIGNUP_PAGE_LINK,
  DISPLAY_MODE_THREE_POSTS,
  EDIT_USER_LINK,
  SEARCH_BAR,
  LOGOUT_LINK,
} from "./services/domService.js";
import PAGES from "./models/pageModel.js";
import {
  onChangePage,
  onChangeDisplayMode,
  setNavDisplay,
} from "./routes/router.js";
import { renderSlider } from "./components/renderSlider.js";
import {
  setCounter,
  handleCreatePic,
  createPicFormFieldsListeners,
  handleCancelCreateNewPic,
  onCreateNewPic,
  onEditPic,
  onCancelEditPic,
} from "./services/picService.js";
import initialData from "./initialData/initialData.js";
import {
  loginListeners,
  handleLogin,
  onSignupNewUser,
  handleCancelSignup,
  handleSignup,
  handleEditUser,
} from "./services/userService.js";
import DISPLAY from "./models/displayModel.js";
import { handleDisplayMode } from "./services/displayModeService.js";
import Post from "./models/postsModel.js";
import { filterArrayOfObjectsByTerm } from "./utils/algoMethods.js";
import renderPosts from "./components/renderPosts.js";
import {
  getItemFromLocalStorage,
  removeItemFromLocalStorage,
  setItemInLocalStorage,
} from "./services/localStorageService.js";

/////////////////// משתנים גלובליים /////////////////////////////////
let pictures = initialData().pictures;
let users = initialData().users;
let posts = initialData().posts;
let counter = 0;

// לוגיקה//
const handalSliderPicChange = (controller = "") => {
  counter = setCounter(pictures, counter, controller);
  renderSlider(pictures, counter);
};

/********** filter pictures **********/
const handleFilterPictures = (term) => {
  const newPictures = filterArrayOfObjectsByTerm(term, posts, "alt");
  handleDisplayMode(newPictures, DISPLAY.THREE);
};

/********* Create Post **********/
export const handleSubmitNewPic = () => {
  posts = onCreateNewPic(posts);
  handleCancelCreateNewPic();
  handleDisplayMode(posts, DISPLAY.THREE);
};

/********** Signup new User **********/
export const handleSubmitSignup = () => {
  users = onSignupNewUser(users);
  handleCancelSignup();
  onChangePage(PAGES.HOME);
};

/********** Delete Posts **********/
export const handleDeletPost = (id) => {
  posts = posts.filter((post) => post._id !== id);

  handleDisplayMode(posts, DISPLAY.THREE);
};

/********** Edit Posts **********/
export const onSubmitEditPic = (oldPost, id) => {
  posts = onEditPic(posts, id);
  onCancelEditPic();
  handleDisplayMode(DISPLAY.ONE, posts);
};

// ***** Listener האזנה לאירועים  ********
// מצגת תמונות//
SLIDER_PREV_BTN.addEventListener("click", () => handalSliderPicChange("prev"));
SLIDER_NEXT_BTN.addEventListener("click", () => handalSliderPicChange("next"));

// NAV BAR CLICKS ניתוב דפים //
HOME_LINK.addEventListener("click", () => onChangePage(PAGES.HOME));
ABOUT_LINK.addEventListener("click", () => onChangePage(PAGES.ABOUT));
LOGIN_LINK.addEventListener("click", () => handleLogin(users));
LOGOUT_LINK.addEventListener("click", () => {
  removeItemFromLocalStorage("user");
  setNavDisplay();
});
GIVE_LINK.addEventListener("click", handleCreatePic);
SIGNUP_PAGE_LINK.addEventListener("click", handleSignup);
EDIT_USER_LINK.addEventListener("click", handleEditUser);

// DISPLAY MODE CLICKS  בקרי תצוגה //
DISPLAY_MODE_THREE_POSTS.addEventListener("click", () =>
  handleDisplayMode(posts, DISPLAY.THREE)
);
DISPLAY_MODE_ONE_POST_LINK.addEventListener("click", () => {
  handleDisplayMode(posts, DISPLAY.ONE);
});

// שדה חיפוש
SEARCH_BAR.addEventListener("input", (e) =>
  handleFilterPictures(e.target.value)
);

// אתחול ראשוני//
handalSliderPicChange();
setNavDisplay();
onChangePage(PAGES.HOME);
handleDisplayMode(posts, DISPLAY.THREE);
