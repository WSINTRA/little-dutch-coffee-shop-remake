

import React from "react";
import windmill from '../images/windmill.jpg'
import scenic from '../images/scenic.jpg'

const BackDrop = () => (
 <div className="backdrop">
 <div className="backdrop__image-left" ><img alt="windmill"src={windmill}/></div>
 <div className="backdrop__image-right" ><img alt="scenic setting"src={scenic}/></div> 
</div>
);

export default BackDrop;
