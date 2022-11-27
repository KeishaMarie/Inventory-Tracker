import React from "react";
import CoffeeList from "./CoffeeList";
import NewCoffeeSack from "./NewCoffeeSack";

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

  handleAddingNewCoffeeSackToList = (newCoffeeSack) => {
    const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffeeSack);
    this.setState({mainCoffeeList: newMainCoffeeList,
      formVisibleOnPage: false });
  }

  handleClick = () => {
    if (this.state.selectedCoffeeSack != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCoffeeSack: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleUpdatingSelectedCoffeeSack = (id) => {
    const selectedCoffeeSack = this.state.mainCoffeeList.filter(coffeeSack => coffeeSack.id === id) [0];
    this.setState({selectedCoffeeSack: selectedCoffeeSack});
  }


}

export default CoffeeControl;