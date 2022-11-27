import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import ReusableForm from "./ReusableForm";

function NewCoffeeSack(props){

  function handleNewCoffeeSackSubmission(event) {
    event.preventDefault();
    props.onNewCoffeeSackCreation({
      name: event.target.name.value,
      origin: event.target.origin.value,
      roast: event.target.roast.value,
      price: event.target.price.value,
      id: v4()
    })
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewCoffeeSackSubmission}
        buttonText="Add a new sack of coffee" />
    </React.Fragment>
  );
}

NewCoffeeSack.propTypes = {
  onNewCoffeeSack: PropTypes.func
};

export default NewCoffeeSack;