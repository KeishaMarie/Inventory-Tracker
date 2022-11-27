import React from "react";
import PropTypes from "prop-types";
import CoffeeSack from "./CoffeeSack";

function CoffeeList(props){
  return (
    <React.Fragment>
      <hr />
      {props.coffeeList.map((coffeeSack) =>
      <CoffeeSack
        whenCoffeeSackClicked = { props.onCoffeeSackSelection }
        name={coffeeSack.name}
        origin={coffeeSack.origin}
        roast={coffeeSack.roast}
        price={coffeeSack.price}
        quantity={coffeeSack.quantity}
        id={coffeeSack.id}
        key={coffeeSack.id} />
      )}
    </React.Fragment>
  );
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
  onCoffeeSackSelection: PropTypes.func
};

export default CoffeeList;