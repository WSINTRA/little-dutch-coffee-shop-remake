import React from "react";

const Account = (props) => {
	
	return (
	
    <div className="account">
    <div className="banner">{props.banner}

    </div>
    <div className="account__content">
    <div className="account__content_grid_items">

    <div className="account__content_grid_items_selection-box"> 
    <div className="option_sales">Sales stats</div>
    <div className="option_orders">Orders</div>
    <div className="option_customers">Customers</div>
    <div className="option_employee">Emplyees</div>
    <div className="option_products">Products</div>
    </div>

    </div>
    
    </div>
    </div>

	)}

export default Account;