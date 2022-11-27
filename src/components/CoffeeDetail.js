import React from "react";
import PropTypes from "prop-types";
import {useState} from "react";

function CoffeeDetail(props){
  const { coffeeSack, onClickingDelete} = props;
  const [quantity, setQuantity] = useState(130);
  let decrementQuantity = () => setQuantity(quantity - 1);
  if(quantity <= 1 || quantity === "Out of Stock") {
    decrementQuantity = () => setQuantity("Out of Stock");
  }
  return (
    <React.Fragment>
      <h2>Coffee Details</h2>
      <h3>{coffeeSack.name}</h3>
      <h3>{coffeeSack.origin}</h3>
      <h3>{coffeeSack.roast} Roast</h3>
      <h3>Inventory: {quantity}</h3>
      <h3>Price for 1 pound of coffee: {coffeeSack.price}</h3>
      <button onClick = {decrementQuantity}>Purchase 1 Pound</button>
      <button onClick = {props.onClickingEdit}>Edit Coffee</button>
      <button onClick = {() => onClickingDelete(coffeeSack.id)}>Delete Coffee Sack</button>
      <hr />
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffeeSack: PropTypes.object,
  quantity: PropTypes.object,
  decrementQuantity: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default CoffeeDetail;