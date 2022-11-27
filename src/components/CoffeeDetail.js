import React from "react";
import PropTypes from "prop-types";
import CoffeeSack from "./CoffeeSack";

function CoffeeDetail(props){

}
return(
  <React.Fragment>
    <h2>Coffee Details</h2>
    <h3>{coffeeSack.name}</h3>
    <h3>{coffeeSack.origin}</h3>
    <h3>{coffeeSack.roast} Roast</h3>
    <h3>Price for 1 pound of coffee: {coffeeSack.price}</h3>
  </React.Fragment>
);

CoffeeDetail.propTypes = {
  coffeeSack: PropTypes.object
}