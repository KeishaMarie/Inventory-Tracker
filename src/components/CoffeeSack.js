import React from "react";
import PropTypes from "prop-types";

function CoffeeSack(props){
  return(
    <React.Fragment>
      <h1>{props.name}</h1>
    </React.Fragment>
  )
}

CoffeeSack.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.string,
  roast: PropTypes.string
};

export default CoffeeSack;