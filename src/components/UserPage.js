import React from "react";
import HeaderComp from "./HeaderComp"
import MenuComp from "./MenuComp"
import { connect } from 'react-redux'



const UserPage = (props) => (

  <div>
  {console.log(props)}
    <HeaderComp />
    <MenuComp 
    selectMenuItem={props.selectMenuItem}
    menuItem={props.menuItem}/>
  </div>
);

function msp(state){
	return {categories: state.categories}
}
export default connect(msp)(UserPage);


//Build a header bar component, build a nav bar component, 
// BUild links and routes for the different pages based on the designs
