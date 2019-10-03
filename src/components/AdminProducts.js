import React from 'react'
import ProductForm from './ProductForm'
import SearchListProducts from './SearchListProducts'
const AdminProducts = ()=>{
	return (
		<div className="admin-product">
		
		<div className="add-product-form">
			<ProductForm/>
		</div>
		<div className="search-list">
			<SearchListProducts/>
		</div>
		</div>
		)
}
export default AdminProducts;
