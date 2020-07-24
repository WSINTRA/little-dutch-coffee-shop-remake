import { formObjectCreator } from "../helpers/form-helpers";

const FILTER_PRODUCT_BY = "FILTER_PRODUCT_BY";
const TOGGLE_PRODUCT_DETAIL = "TOGGLE_PRODUCT_DETAIL";
const UPDATE_PRODUCT_STORE = "UPDATE_PRODUCT_STORE";
const PRODUCT_FOR_EDIT = "PRODUCT_FOR_EDIT";
const WEEKLY_CHECKBOX = "WEEKLY_CHECKBOX";
const REMOVE_PRODUCT_BY_ID = "REMOVE_BY_ID";
const STAR_RATE = "STAR_RATE";
const PRODUCT_FORM_CONTROL = "PRODUCT_FORM_CONTROL";
const ADD_PRODUCT_DATA_TO_STATE = "ADD_PRODUCT_DATA_TO_STATE";
const SUBMIT_PRODUCT_FORM = "SUBMIT_PRODUCT_FORM";
const CLEAR_PRODUCT_ID = "CLEAR_PRODUCT_ID";
const BACKSWITCH_PRODUCT_DETAIL = "BACKSWITCH_PRODUCT_DETAIL";

const formatProductToEdit = (state, payload) => {
  let stateCopy = { ...state };
  stateCopy.productTitle = payload.title;
  stateCopy.description = payload.description;
  stateCopy.imageURL = payload.image;
  stateCopy.starRate = payload.rating;
  stateCopy.price = payload.price;
  stateCopy.checkbox = payload.in_menu;
  stateCopy.editID = payload.id;
  stateCopy.breed = payload.breed;
  return stateCopy;
};

function ProductReducer(state=null, action) {
  switch (action.type) {
    case FILTER_PRODUCT_BY:
      return { ...state, filteredProducts: action.payload };

    case TOGGLE_PRODUCT_DETAIL:
      return { ...state, showProductDetail: action.payload };

    case UPDATE_PRODUCT_STORE:
      return { ...state, productData: action.payload };

    case BACKSWITCH_PRODUCT_DETAIL:
      return {
        ...state,
        showProductDetail: !state.showProductDetail,
        activeProductDetail: action.payload,
      };

    case REMOVE_PRODUCT_BY_ID:
      let id = action.payload;
      let removedProductByID = state.productData
        .map((el) => (el.id !== id ? el : null))
        .filter((el) => el !== null);
      return { ...state, productData: removedProductByID };

    case CLEAR_PRODUCT_ID:
      return { ...state, productForm: { ...state.productForm, editID: 0 } };

    case SUBMIT_PRODUCT_FORM:
      return { ...state, productData: action.payload };

    case PRODUCT_FOR_EDIT:
      let productFormEdit = formatProductToEdit(
        state.productForm,
        action.payload
      );
      return { ...state, productForm: productFormEdit };

    case WEEKLY_CHECKBOX:
      return {
        ...state,
        productForm: {
          ...state.productForm,
          checkbox: !state.productForm.checkbox,
        },
      };

    case STAR_RATE:
      return { ...state, productForm: action.payload };

    case PRODUCT_FORM_CONTROL:
      let productUpdate = formObjectCreator(
        "productForm",
        action.payload,
        state
      );
      return { ...state, productForm: productUpdate };

    case ADD_PRODUCT_DATA_TO_STATE:
      return {
        ...state,
        productData: action.payload,
        filteredProducts: action.payload,
      };

    default:
      return state;
  }
}

export default ProductReducer;
