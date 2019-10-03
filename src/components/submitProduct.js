
const submitProduct =(formDetails, submitToStore)=> {
//write a submission to the backend server here.
fetch('http://localhost:3050/v1/new_product', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${localStorage.myJWT}`
            },
            body: JSON.stringify({
               "title": formDetails.productTitle,
               "rating": formDetails.starRate,
               
               "description": formDetails.description,
               "price": formDetails.price,
               "image": formDetails.imageURL,
               "in_menu": formDetails.checkbox

            }) }).then(res => res.json() ).then(product=> {
                    //push new product into the array of products
                    submitToStore(product)
                    } )
}

export default submitProduct;
