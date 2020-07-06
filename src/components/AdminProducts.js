import React, { useState } from "react";
import SearchListProducts from './SearchListProducts'

const AdminProducts = (props)=>{

	return (
		<div className="admin-product">			
		<div className="search-list">
			<SearchListProducts />
		</div>
		</div>
		)
}
export default AdminProducts;
