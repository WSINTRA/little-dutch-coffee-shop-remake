import React from "react";
import HeaderComp from "./HeaderComp"
import MenuComp from "./MenuComp"
const UserPage = (props) => (
  <div>
    <HeaderComp />
    <MenuComp 
    selectMenuItem={props.selectMenuItem}
    menuItem={props.menuItem}/>
  </div>
);

export default UserPage;


//Build a header bar component, build a nav bar component, 
// BUild links and routes for the different pages based on the designs
