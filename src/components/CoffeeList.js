import React from "react";
import PropTypes from "prop-types";
import CoffeeSack from "./CoffeeSack";

function CoffeeList(props){
  return (
    <React.Fragment>
      <hr />
      {props.coffeeList.map((coffeeSack) =>
      <CoffeeSack
        whenCoffeeSackClicked = {props.onSelectedCoffeeSack}
        name={coffeeSack.name}
        origin={coffeeSack.origin}
        roast={coffeeSack.roast}
        price={coffeeSack.price}
        id={coffeeSack.id}
        key={coffeeSack.id} />
      )}
    </React.Fragment>
  );
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
  onSelectedCoffeeSack: PropTypes.func
};

export default CoffeeList;