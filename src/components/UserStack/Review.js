import React from "react";
import ReviewEdit from "./ReviewEdit";
import Reviews from "./Reviews"

const Review = (props) => {
  return (
    <div className="review-products">
      <Reviews />
      <ReviewEdit />
    </div>
  );
};
export default Review;