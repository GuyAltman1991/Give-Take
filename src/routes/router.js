import DISPLAY from "../models/displayModel.js";
import PAGES from "../models/pageModel.js";
import {
  ABOUT_PAGE,
  HOME_PAGE,
  LOGIN_PAGE,
  GIVE_PAGE,
  ERROR_PAGE,
  SIGNUP_PAGE,
  NO_DATA_CONTAINER,
  DATA_CONTAINER,
  DISPLAY_MODE_THREE_POSTS,
  DISPLAY_MODE_THREE_POSTS_CONTAINER,
  EDIT_POST_PAGE,
  SEARCH_BAR_CONTAINER,
  EDIT_USER_PAGE,
  EDIT_USER_LINK,
  MORE_DETAILS_POST_PAGE,
  MORE_DETAILS_HEADLINE,
  DISPLAY_MODE_ONEPOST_CONTAINER,
  GIVE_LINK,
  LOGIN_LINK,
  LOGOUT_LINK_CONTAINER,
  LOGOUT_LINK,
} from "../services/domService.js";
import { getItemFromLocalStorage } from "../services/localStorageService.js";

export const onChangePage = (page) => {
  HOME_PAGE.className = "d-none";
  ABOUT_PAGE.className = "d-none";
  LOGIN_PAGE.className = "d-none";
  GIVE_PAGE.className = "d-none";
  SIGNUP_PAGE.className = "d-none";
  EDIT_POST_PAGE.className = "d-none";
  EDIT_USER_PAGE.className = "d-none";
  MORE_DETAILS_POST_PAGE.className = "d-none";


  if (page === PAGES.HOME) return (HOME_PAGE.className = "d-block ");
  if (page === PAGES.ABOUT) return (ABOUT_PAGE.className = "d-block ");
  if (page === PAGES.LOGIN) return (LOGIN_PAGE.className = "d-block ");
  if (page === PAGES.GIVE) return (GIVE_PAGE.className = "d-block ");
  if (page === PAGES.SIGNUP) return (SIGNUP_PAGE.className = "d-block ");
  if (page === PAGES.EDIT_POST) return (EDIT_POST_PAGE.className = "d-block ");
  if (page === PAGES.EDIT_USER) return (EDIT_USER_PAGE.className = "d-block");
  if (page === PAGES.MORE_DETAILS)
    return (MORE_DETAILS_POST_PAGE.className = "d-block" );
  ERROR_PAGE.className = "d-block";
  return
};

export const setNavDisplay = () => {
  // GIVE_LINK.className = "d-none";
  const token = getItemFromLocalStorage("user");
  if (!token) {
    // LOGIN_LINK.className = "navbar-nav";
    // LOGOUT_LINK_CONTAINER.className = "d-none";
    return;
  }
  // LOGIN_LINK.className = "d-none";
  // LOGOUT_LINK_CONTAINER.className = "navbar-nav";

  const user = JSON.parse(token);

  // if (user.isAdmin) return (GIVE_LINK.className = "d-block");
};

export const onChangeDisplayMode = (display, posts = []) => {
  NO_DATA_CONTAINER.className = "d-none";
  DATA_CONTAINER.className = "d-none";
  DISPLAY_MODE_THREE_POSTS_CONTAINER.className = "d-none";
  SEARCH_BAR_CONTAINER.className = "d-none";
  DISPLAY_MODE_ONEPOST_CONTAINER.className = "d-none";

  if (!posts.length) {
    SEARCH_BAR_CONTAINER.className = "d-block";
    NO_DATA_CONTAINER.className = "d-block";
    return;
  }
  DATA_CONTAINER.className = "d-block";
  if (display === DISPLAY.THREE) {
    DISPLAY_MODE_THREE_POSTS_CONTAINER.className = "d-block  d-flex ";
    SEARCH_BAR_CONTAINER.className = "d-block";
    return;
  }
  if (display === DISPLAY.ONE) {
    DISPLAY_MODE_ONEPOST_CONTAINER.className = "d-block  d-flex ";
    SEARCH_BAR_CONTAINER.className = "d-block";
    return;
  }
};
