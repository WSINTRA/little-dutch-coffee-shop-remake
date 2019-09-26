import React from 'react'
import StarRatingComponent from 'react-star-rating-component';

const ProductForm=(props)=>{
	return (
		<div className="product-form">
        <h1>Add/Edit Product</h1>
        
            <label >Product title</label>
            <input 
            
            name="product-title"
            
            type="text"/>
           
             <label >Description</label>
            <input 
            
            name="product-title"
            
            type="text"/>
             <label >Price USD/$</label>
            <input 
            
            name="product-title"
            
            type="number"/>
           
             <label >Image Location</label>
            <input 
            
            name="product-title"
            
            type="url"/>
              <label >Rating</label>
             <div className="star"><StarRatingComponent 
		          name="rate1" 
		          starCount={5}
		          value={4}
		        /></div>
              <label >On Weekly Menu ?</label>
            <input 
            
            name="product-title"
            
            type="checkbox"/>

          <div className="upload">Upload Image</div>
          <div className="submit">Submit</div>
		</div>
	)
}

export default ProductForm;