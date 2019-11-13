import React from 'react'
import { connect } from 'react-redux'

const handleProductClick=(product,props)=>{
//send this information to the productForm state
props.sendToFormControl(product)
}

const handleSearchForm=(props,term)=>{
props.filterFormControl(term)
}

const SearchListProducts = (props)=>{
	return (
		
		<div className="search-list-products">
			<div className="search">
			  <input onChange={(e)=>handleSearchForm(props,e.target.value)}
			  value={props.searchTerm} 
			  placeholder="filter by title"/>
			  <span className="fa fa-search"></span>
			</div>
			
			<div className="results">
			<ul>{(props.productData.length ? props.productData.filter(el=>el.title.toLowerCase().includes(props.searchTerm.toLowerCase())).map( product=> 
       			 <li key={product.id}
        				onClick={()=>handleProductClick(product,props)}>
        				<h3>ID:{product.id}-</h3><b>{product.title}</b><p>{product.description}</p><hr/></li>) : null)}
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
    filterFormControl: (object)=> {
      dispatch({type:"SEARCH_TERM_CONTROL", payload: object})
    }
  }
}

function msp(state){
  return {
    productData: state.productData,
    searchTerm: state.searchTerm
  };
}

export default connect(msp,mdp)(SearchListProducts);
