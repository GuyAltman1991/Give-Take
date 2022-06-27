import {
  URL_CREATE_POST_FIELD,
  URL_CREATE_POST_ERROR,
  ALT_CREATE_POST_FIELD,
  ALT_CREATE_POST_ERROR,
  DESCIPTION_CREATE_POST_FIELD,
  DESCIPTION_CREATE_POST_ERROR,
  LOCATION_CREATE_POST_FIELD,
  LOCATION_CREATE_POST_ERROR,
  PHONE_CREATE_POST_FIELD,
  PHONE_CREATE_POST_ERROR,
  SUBMIT_CREATE_POST_BTN,
  CANCELֹ_BTN,
  URL_EDIT_POST_FIELD,
  ALT_EDIT_POST_FIELD,
  DESCRIPTION_EDIT_POST_FIELD,
  LOCATION_EDIT_POST_FIELD,
  PHONE_EDIT_POST_FIELD,
  ALT_EDIT_POST_ERROR,
  DESCRIPTION_EDIT_POST_ERROR,
  LOCATION_EDIT_POST_ERROR,
  URL_EDIT_POST_ERROR,
  PHONE_EDIT_POST_ERROR,
  SUBMIT_EDIT_POST_BTN,
  EDIT_POST_DISPLAY,
  CANCELֹ_EDIT_BTN,
} from "./domService.js";
import Post from "../models/postsModel.js";
import Picture from "../models/PictureModel.js";
import useForm from "../services/formService.js";
import { onChangePage } from "../routes/router.js";
import PAGES from "../models/pageModel.js";
import { handleSubmitNewPic, onSubmitEditPic } from "../app.js";
import renderMoreDetailsPage from "../components/renderMoreDetailsPost.js";
import { handleDisplayMode } from "./displayModeService.js";
import DISPLAY from "../models/displayModel.js";

export const setCounter = (array, counterNum, controller = "") => {
  let newCounter;
  if (controller === "next") {
    newCounter = counterNum < array.length - 1 ? counterNum + 1 : 0;
    return newCounter;
  }
  if (controller === "prev") {
    newCounter = counterNum > 0 ? counterNum - 1 : array.length - 1;
    return newCounter;
  }
  return newCounter;
};

const { onChangeInputField, onClearFormFields } = useForm();

/********* Create Post **********/
export const handleCreatePic = () => {
  onChangePage(PAGES.GIVE);
  createPicFormFieldsListeners();
  CANCELֹ_BTN.addEventListener("click", handleCancelCreateNewPic);
  SUBMIT_CREATE_POST_BTN.addEventListener("click", handleSubmitNewPic);
};

export const createPicFormFieldsListeners = () => {
  const schema = ["url", "alt", "description", "location", "phone"];

  URL_CREATE_POST_FIELD.addEventListener("input", (e) => {
    const validation = {
      min: 10,
      max: 256,
      lowerCase: true,
      regex: {
        regex: /^http[s]?\:\/\/.{1,}.(jpg|png|jpeg)$/g,
        message: "Please enter a valid url",
      },
    };

    const element = {
      input: e.target,
      errorSpan: URL_CREATE_POST_ERROR,
      validation,
    };

    onChangeInputField(schema, element, SUBMIT_CREATE_POST_BTN);
  });

  ALT_CREATE_POST_FIELD.addEventListener("input", (e) => {
    const validation = {
      min: 2,
      max: 256,
    };

    const element = {
      input: e.target,
      errorSpan: ALT_CREATE_POST_ERROR,
      validation,
    };
    onChangeInputField(schema, element, SUBMIT_CREATE_POST_BTN);
  });

  ALT_CREATE_POST_FIELD.addEventListener("input", (e) => {
    const validation = {
      min: 2,
      max: 256,
    };

    const element = {
      input: e.target,
      errorSpan: ALT_CREATE_POST_ERROR,
      validation,
    };
    onChangeInputField(schema, element, SUBMIT_CREATE_POST_BTN);
  });

  DESCIPTION_CREATE_POST_FIELD.addEventListener("input", (e) => {
    const validation = {
      min: 1,
      max: 256,
    };

    const element = {
      input: e.target,
      errorSpan: DESCIPTION_CREATE_POST_ERROR,
      validation,
    };

    onChangeInputField(schema, element, SUBMIT_CREATE_POST_BTN);
  });

  LOCATION_CREATE_POST_FIELD.addEventListener("input", (e) => {
    const validation = {
      min: 1,
      max: 256,
    };

    const element = {
      input: e.target,
      errorSpan: LOCATION_CREATE_POST_ERROR,
      validation,
    };

    onChangeInputField(schema, element, SUBMIT_CREATE_POST_BTN);
  });

  PHONE_CREATE_POST_FIELD.addEventListener("input", (e) => {
    const validation = {
      min: 1,
      max: 256,
    };

    const element = {
      input: e.target,
      errorSpan: PHONE_CREATE_POST_ERROR,
      validation,
    };

    onChangeInputField(schema, element, SUBMIT_CREATE_POST_BTN);
  });
};

export const handleCancelCreateNewPic = () => {
  const { onClearFormFields } = useForm();
  const fields = [
    URL_CREATE_POST_FIELD,
    ALT_CREATE_POST_FIELD,
    DESCIPTION_CREATE_POST_FIELD,
    LOCATION_CREATE_POST_FIELD,
    PHONE_CREATE_POST_FIELD,
  ];

  const errorSpans = [
    URL_CREATE_POST_ERROR,
    ALT_CREATE_POST_ERROR,
    DESCIPTION_CREATE_POST_ERROR,
    LOCATION_CREATE_POST_ERROR,
    PHONE_CREATE_POST_ERROR,
  ];
  onClearFormFields(SUBMIT_CREATE_POST_BTN, fields, errorSpans);
  onChangePage(PAGES.HOME);
};

export const onCreateNewPic = (posts) => {
  try {
    let newArray = [...posts];
    const post = new Post(
      {
        url: URL_CREATE_POST_FIELD.value,
        alt: ALT_CREATE_POST_FIELD.value,
        description: DESCIPTION_CREATE_POST_FIELD.value,
        location: LOCATION_CREATE_POST_FIELD.value,
        phone: PHONE_CREATE_POST_FIELD.value,
      },
      posts
    );
    newArray.push(post);
    return newArray;
  } catch (error) {
    console.error(error.message);
    PHONE_CREATE_POST_ERROR.innerHTML = error.message;
  }
};

// /********* Edit Post/Picture **********/
export const editPicListeners = () => {
  const schema = ["url", "alt", "description", "location", "phone"];

  const handleUrlEditChange = (e) => {
    onChangeInputField(
      schema,
      {
        input: e.target,
        errorSpan: URL_EDIT_POST_ERROR,
        validation: {
          min: 10,
          max: 256,
          lowerCase: true,
          regex: /^http[s]?\:\/\/.{1,}.(jpg|png|jpeg)$/g,
        },
      },
      SUBMIT_EDIT_POST_BTN
    );
    EDIT_POST_DISPLAY.src = e.target.value;
  };

  // עריכת תמונה
  URL_EDIT_POST_FIELD.addEventListener("input", (e) => handleUrlEditChange(e));

  ALT_EDIT_POST_FIELD.addEventListener("input", (e) =>
    onChangeInputField(
      schema,
      {
        input: e.target,
        errorSpan: ALT_EDIT_POST_ERROR,
        validation: { min: 2 },
      },
      SUBMIT_EDIT_POST_BTN
    )
  );

  DESCRIPTION_EDIT_POST_FIELD.addEventListener("input", (e) =>
    onChangeInputField(
      schema,
      {
        input: e.target,
        errorSpan: DESCRIPTION_EDIT_POST_ERROR,
        validation: { min: 2 },
      },
      SUBMIT_EDIT_POST_BTN
    )
  );

  LOCATION_EDIT_POST_FIELD.addEventListener("input", (e) =>
    onChangeInputField(
      schema,
      {
        input: e.target,
        errorSpan: LOCATION_EDIT_POST_ERROR,
        validation: { min: 1 },
      },
      SUBMIT_EDIT_POST_BTN
    )
  );

  PHONE_EDIT_POST_FIELD.addEventListener("input", (e) =>
    onChangeInputField(
      schema,
      {
        input: e.target,
        errorSpan: PHONE_EDIT_POST_ERROR,
        validation: { min: 2 },
      },
      SUBMIT_EDIT_POST_BTN
    )
  );
};

export const handleEditPost = (posts, id) => {
  onChangePage(PAGES.EDIT_POST);

  mapToModel(posts, id);
  editPicListeners();
  SUBMIT_EDIT_POST_BTN.addEventListener("click", () =>
    onSubmitEditPic(posts, id)
  );
  CANCELֹ_EDIT_BTN.addEventListener("click", onCancelEditPic);
};

export const mapToModel = (posts, id) => {
  const post = posts.find((post) => post._id === id);
  if (!post) throw new Error("Opss... there is no post with this id: " + id);
  const { url, alt, description, location, phone } = post;
  data = { url, alt, description, location, phone };
  URL_EDIT_POST_FIELD.value = url;
  ALT_EDIT_POST_FIELD.value = alt;
  DESCRIPTION_EDIT_POST_FIELD.value = description;
  LOCATION_EDIT_POST_FIELD.value = location;
  PHONE_EDIT_POST_FIELD.value = phone;

  EDIT_POST_DISPLAY.src = url;
  EDIT_POST_DISPLAY.alt = alt;
};

export const onCancelEditPic = (posts) => {
  const errorSpans = [
    ALT_EDIT_POST_ERROR,
    DESCRIPTION_EDIT_POST_ERROR,
    LOCATION_EDIT_POST_ERROR,
    URL_EDIT_POST_ERROR,
    PHONE_EDIT_POST_ERROR,
  ];
  const fields = [
    URL_EDIT_POST_FIELD,
    ALT_EDIT_POST_FIELD,
    LOCATION_EDIT_POST_FIELD,
    DESCRIPTION_EDIT_POST_FIELD,
    PHONE_EDIT_POST_FIELD,
  ];
  onClearFormFields(SUBMIT_EDIT_POST_BTN, fields, errorSpans);
  onChangePage(PAGES.HOME);
  handleDisplayMode(posts, DISPLAY.THREE);
};

export const onEditPic = (posts, id) => {
  const post = posts.find((post) => post._id === id);
  if (!post) throw new Error("No Posts with the given id...");
  post.url = URL_EDIT_POST_FIELD.value;
  post.alt = ALT_EDIT_POST_FIELD.value;
  post.location = LOCATION_EDIT_POST_FIELD.value;
  post.description = DESCRIPTION_EDIT_POST_FIELD.value;
  post.phone = PHONE_EDIT_POST_FIELD.value;
  onCancelEditPic(posts);
  return posts;
};

export const handleMoreDetailsPost = (posts, id) => {
  onChangePage(PAGES.MORE_DETAILS);
  renderMoreDetailsPage(posts, id);
};
