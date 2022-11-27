import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function CoffeeEdit (props) {
  const { coffeeSack } = props;

  function handleCoffeeEditSubmission(event) {
    event.preventDefault();
    props.onCoffeeEdit({
      name: event.target.name.value,
      origin: event.target.origin.value,
      roast: event.target.roast.value,
      price: event.target.price.value,
      id: coffeeSack.id })
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler = {handleCoffeeEditSubmission}
        buttonText="Edit Coffee" />
    </React.Fragment>
  );
}

CoffeeEdit.propTypes = {
  coffeeSack: PropTypes.object,
  onCoffeeEdit: PropTypes.func
};

export default CoffeeEdit;