import React from "react";
import PropTypes from "prop-types";

function CoffeeSack(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCoffeeSackClicked(props.id)}>
        <h1>{props.name}</h1>
        <h3>Click for details</h3>
        <hr />
      </div>
    </React.Fragment>
  );
}

CoffeeSack.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.string,
  roast: PropTypes.string,
  id: PropTypes.string,
  whenCoffeeSackClicked: PropTypes.func
};

export default CoffeeSack;