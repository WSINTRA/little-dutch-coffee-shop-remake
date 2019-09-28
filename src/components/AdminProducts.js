import React from 'react'
import ProductForm from './ProductForm'
import SearchListProducts from './SearchListProducts'
const AdminProducts = ()=>{
	return (
		<div className="admin-product">
		<div className="search-list">
			<SearchListProducts/>
		</div>
		<div className="add-product-form">
			<ProductForm/>
		</div>
		</div>
		)
}
export default AdminProducts;
