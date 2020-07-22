import React from "react";
import SearchListProducts from "./SearchListProducts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faUserMinus,
  faTrashAlt,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import { Link,} from "react-router-dom";


const AdminProducts = (props) => {
  
  const iconArray = [
    { iconName: faSave, route: "AddNewProduct" },
    { iconName: faTrashAlt, route: "RemoveProduct" },
    { iconName: faUserPlus, route: "AddNewUser" },
    { iconName: faUserMinus, route: "RemoveUser" },
  ];

  return (
    <div className="admin-product">
      <span>
        <ul>
          {iconArray.map((item) => {
            return (
              <li>
                <Link to={`account/${item.route}`}>
                  <FontAwesomeIcon size="1x" icon={item.iconName} />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="search-list">
          <SearchListProducts />
        </div>
      </span>
    </div>
  );
};
export default AdminProducts;
