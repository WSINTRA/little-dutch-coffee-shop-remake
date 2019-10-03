import React from 'react'
import { connect } from 'react-redux'

const handleProductClick=(product,props)=>{
//send this information to the productForm state
props.sendToFormControl(product)
}

const SearchListProducts = (props)=>{
	return (
		
		<div className="search-list-products">
			<div className="search">
			  <input placeholder="search products"/>
			  <span className="fa fa-search"></span>
			</div>
			{console.log(props)}
			<div className="results">
			<ul>{(props.productData.length ? props.productData.map( product=> 
       			 <li key={product.id}
        				onClick={()=>handleProductClick(product,props)}>
        				{product.id}:{product.title}</li>) : null)}
			</ul>
			</div>
		</div>
		
		)
}
function mdp(dispatch){
   return {
    sendToFormControl: (object)=> {
      dispatch({type:"PRODUCT_FOR_EDIT", payload: object})
    },
  }
}

function msp(state){
  return {
    productData: state.productData,
  };
}

export default connect(msp,mdp)(SearchListProducts);
