import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import { connect } from 'react-redux'



const ControlledInput = (props, input) => {

  const value = input.target.value
  const label = input.target.name
  const payload = {}
  payload[label] = value 
  props.productFormControl(payload)

}

const CreateNewProduct = (ID)=> {

}

const StarClick = (props,nextValue, prevValue, name)=> {
    props.starClickControl(nextValue);
  }

const CheckboxClick = (props)=> {
	props.weeklyMenuBoolControl()
}

const ProductForm=(props)=>{
	return (
		<div className="product-form">
	
        <h1>Add/Edit Product</h1>
            {console.log(props)}
            <label >Product title</label>
            <input 
            onChange={(e)=>ControlledInput(props, e)} 
            name="productTitle"
            value={props.productForm.productTitle}
            type="text"/>
           
             <label >Description</label>
            <textarea
            onChange={(e)=>ControlledInput(props, e)} 
            name="description"
            value={props.productForm.description}
            type="text"/>
             <label >Price USD/$</label>
            <input 
            onChange={(e)=>ControlledInput(props, e)} 
            name="price"
            min="0.00" max="100000.00" step="0.01"
            value={props.productForm.price}
            type="number"/>
           
             <label >Image Location</label>
            <input 
            onChange={(e)=>ControlledInput(props, e)} 
            name="imageURL"
            value={props.productForm.imageURL}
            type="text"/>
              <label >Rating</label>
             <div className="star">

             <StarRatingComponent 
		          name="prodRating" 
		          starCount={5}
		          value={props.productForm.starRate}
		          onStarClick={StarClick.bind(this,props)}
		        />

		        </div>
              <label >On Weekly Menu ?</label>
            <input 
            
            name="weeklyMenuBool"
            checked={props.productForm.checkbox}
            onChange={()=>CheckboxClick(props)}
            type="checkbox"/>
            {console.log(props.productForm.editID)}
            <label >Current Product ID <p style={{fontSize: "0.8rem"}}>(if ID=0 a new product will be created)</p></label><p>{props.productForm.editID}</p>
            

          
          <div className="clear" onClick={()=>props.clearProductID()}>Clear product ID</div>
          <div className="submit" onClick={()=>props.submitProductForm()}>Submit</div>
		</div>
	)
}

function msp(state){
  return {
    productForm: state.productForm,
  };
}
function mdp(dispatch){
  return {
    clearProductID:(object)=> {
      dispatch({type:"CLEAR_PRODUCT_ID", payload: object})
    },
    submitProductForm: (object)=> {
      dispatch({type:"SUBMIT_PRODUCT_FORM", payload: object})
    },
  	weeklyMenuBoolControl: (object)=> {
  		dispatch({type:"WEEKLY_CHECKBOX", payload: object})
  	},
  	starClickControl: (object)=> {
  		dispatch({type:"STAR_RATE", payload: object})
  	},
    productFormControl: (object)=> {
      dispatch({type:"PRODUCT_FORM_CONTROL", payload: object})
    },
  }
}
export default connect(msp,mdp)(ProductForm);