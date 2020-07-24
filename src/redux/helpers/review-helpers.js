class Review{
    constructor(id, content, product, product_id, title, user_id, username){
        this.id = id;
        this.content = content;
        this.product = product;
        this.product_id = product_id;
        this.title = title;
        this.user_id = user_id;
        this.username = username;
    }
}

export const addReviewToUserAndProduct = (state, review) => {
    let stateCopy = { ...state };
    let newReview = new Review(
        review.id,
        review.content,
        review.product,
        review.product_id,
        review.title,
        review.user_id,
        review.username
        );

    const existingCheck = (userCopy, newReview) => {
      let userData = userCopy.reviews.filter(
        (review) => review.product_id !== newReview.product_id
      );
      userData.push(newReview);
      return userData;
    };
  
    let reviewsArray = existingCheck(stateCopy.userData, newReview);
  
    stateCopy.userData.reviews = reviewsArray;
    stateCopy.productData
      .filter((prod) => prod.id === newReview.product_id)[0]
      .reviews.push(newReview);
    return stateCopy;
  };