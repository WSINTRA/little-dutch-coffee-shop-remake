import React from "react";
import { connect } from "react-redux";
import Card from "./Card";
import ProductDetail from "./ProductDetails";
import { useSpring, animated } from "react-spring";
import CartOverview from '../old_components/CartOverview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'


const onDetailClosed=(props)=>{
  props.backSwitchProductDetail();
  props.closeSuccess();

}

const WeeklyMenu = (props) => {
  const spring = useSpring({ opacity: 1, from: { opacity: 0 } });
  let categories = props.productData || [];
  return (
    <animated.div style={spring}>
      {props.showProductDetail ? (
		  <>
		  <div style={{marginLeft: "5rem", cursor:"pointer"}} className="close-icon" onClick={()=>onDetailClosed(props)}>
          <FontAwesomeIcon size="3x" icon={faWindowClose} />
        </div>
        <ProductDetail product={props.activeProductDetail} />
		</>
      ) : (
        <div className="weekly-display">
          <div className="product-filters">Some Filters here</div>
          <div className="products-list">
            {categories.map((product) => {
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
    productData: state.productData,
    showProductDetail: state.showProductDetail,
    activeProductDetail: state.activeProductDetail,
  };
}
export default connect(msp, mdp)(WeeklyMenu);

// const arrow = <svg xmlns="http://www.w3.org/2000/svg" width="42" height="48" viewBox="0 0 42 48">
//   <path id="Polygon_1" data-name="Polygon 1" d="M19.659,7.6a5,5,0,0,1,8.682,0L43.725,34.519A5,5,0,0,1,39.384,42H8.616a5,5,0,0,1-4.341-7.481Z" transform="translate(0 48) rotate(-90)" fill="#5d5d5d"/>
// </svg>

// 	return (

//     <div className="weekly-menu">
//     {props.showProductDetail ?
//     	<div className="banner"><div onClick={()=>props.backSwitchProductDetail()}>{arrow}</div><p>{props.activeProductDetail.title}</p></div>
//     	:
//     	<div className="banner">{props.banner}</div>
//     }
//     <div className="display-window">
//     {/*Show the ProductDetail here if a card is clicked*/}

//     {props.showProductDetail ?
//     	<ProductDetail
//     	product={props.activeProductDetail}/>
//     	:
//     	categories.filter(el=> el.in_menu === true).map(
//     		el=> <Card key={el.id} switch={props.backSwitchProductDetail}product={el}/>
//     		)}
//         </div>
//     </div>

// 	)
