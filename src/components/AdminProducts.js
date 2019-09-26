import React from 'react'
import ProductForm from './ProductForm'
const AdminProducts = ()=>{
	return (
		<div className="admin-product">
		<div className="search-list">
			Search and product List here
		</div>
		<div className="add-product-form">
			<ProductForm/>
		</div>
		</div>
		)
}
export default AdminProducts;
