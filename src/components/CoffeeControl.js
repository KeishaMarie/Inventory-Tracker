import React from "react";
import CoffeeList from "./CoffeeList";

class CoffeeControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainCoffeeList: [],
      selectedCoffeeSack: null,
      editing: false
    };
  }
}