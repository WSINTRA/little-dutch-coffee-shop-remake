import React from "react";
import { connect } from "react-redux";
import Card from "./Card";
import ProductDetail from "./ProductDetails";
import { useSpring, animated } from "react-spring";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'


const onDetailClosed=(props)=>{
  props.backSwitchProductDetail();
  props.closeSuccess();
}

const handleSearchFilter=(keyWord = "", productsFromFetch, filterProductBy)=>{
    productsFromFetch = productsFromFetch.filter(product => {
      return product.title.toLowerCase().includes(keyWord.toLowerCase())
    })
    filterProductBy(productsFromFetch);
}

const WeeklyMenu = (props) => {
  const spring = useSpring({ opacity: 1, from: { opacity: 0 } });
  const productsFromFetch = props.productData
  return (
    <animated.div style={spring}>
      {props.showProductDetail ? (
		  <React.Fragment>
		  <div style={{marginLeft: "5rem", cursor:"pointer"}} className="close-icon" onClick={()=>onDetailClosed(props)}>
          <FontAwesomeIcon size="3x" icon={faWindowClose} />
        </div>
        <ProductDetail product={props.activeProductDetail} />
		</React.Fragment>
      ) : (
        <div className="weekly-display">
          <div className="product-filters">
            <input 
            placeholder="Search"
            onChange={(e)=>handleSearchFilter(e.target.value, productsFromFetch, props.filterProductBy)}
                   className="filter-bar">
            </input>
          </div>
          <div className="products-list">
            {props.filteredProducts.map((product) => {
              return (
                <Card
                  key={product.id}
                  backSwitch={props.backSwitchProductDetail}
                  {...product}
                />
              );
            })}
          </div>
        </div>
      )}
    </animated.div>
  );
};

function mdp(dispatch) {
  return {
    filterProductBy: (object) => {
      dispatch({ type: "FILTER_PRODUCT_BY", payload: object})
    },
    backSwitchProductDetail: (object) => {
      dispatch({ type: "BACKSWITCH_PRODUCT_DETAIL", payload: object });
    },
    closeSuccess: (action) => {
      dispatch({ type: "CLOSE_SUCCESS_WINDOW", payload: action });
    },
  };
}

function msp(state) {
  return {
    productData: state.ProductReducer.productData,
    filteredProducts: state.ProductReducer.filteredProducts,
    showProductDetail: state.ProductReducer.showProductDetail,
    activeProductDetail: state.ProductReducer.activeProductDetail,
  };
}
export default connect(msp, mdp)(WeeklyMenu);