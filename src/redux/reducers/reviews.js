import { addReviewToUserAndProduct } from '../helpers/review-helpers';
import { formObjectCreator } from '../helpers/form-helpers';
import State from './state/review-state';

const EDIT_REVIEW = 'EDIT_REVIEW';
const REVIEW_FORM_CONTROL = "REVIEW_FORM_CONTROL";
const ADD_REVIEW_DATA_TO_USER_STATE = "ADD_REVIEW_DATA_TO_USER_STATE";

function ReviewReducer(state=State, action) {
    switch (action.type) {
      
      case EDIT_REVIEW:
        return {...state, editReviewForm: {...state.editReviewForm, productTitle: action.payload.title, productID: action.payload.id} }
      
      case ADD_REVIEW_DATA_TO_USER_STATE:
        let updatedState = addReviewToUserAndProduct(state, action.payload);
        return { ...updatedState };
    
      case REVIEW_FORM_CONTROL:
        let reviewUpdate = formObjectCreator(
          "editReviewForm",
          action.payload,
          state
        );
        return { ...state, editReviewForm: reviewUpdate };
  
      default:
        return state;
    }
  }
  
  export default ReviewReducer;