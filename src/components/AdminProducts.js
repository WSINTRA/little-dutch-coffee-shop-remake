import React, { useState } from "react";
import SearchListProducts from "./SearchListProducts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarcode,
  faUserPlus,
  faUserMinus,
  faTrashAlt,
  faStore,
  faStoreAlt,
  faSave
} from "@fortawesome/free-solid-svg-icons";

const AdminProducts = (props) => {
  return (
    <div className="admin-product">
      <span>
        <ul>
          <li>
			<FontAwesomeIcon  size="1x" icon={faSave} /> 
          </li>
          <li>
            <FontAwesomeIcon  size="1x" icon={faTrashAlt} />
          </li>
          <li>
            <FontAwesomeIcon  size="1x" icon={faUserPlus} />
          </li>

          <li>
            <FontAwesomeIcon  size="1x" icon={faUserMinus} />
          </li>
        </ul>
      </span>
      <div className="search-list">
        <SearchListProducts />
      </div>
    </div>
  );
};
export default AdminProducts;
//first use a links
