import React from "react";
import CoffeeEdit from "./CoffeeEdit";
import CoffeeList from "./CoffeeList";
import NewCoffeeSack from "./NewCoffeeSack";
import CoffeeDetail from "./CoffeeDetail";

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

  handleAddingNewCoffeeSack = (newCoffeeSack) => {
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
    const selectedCoffeeSack = this.state.mainCoffeeList.filter(coffeeSack => coffeeSack.id === id)[0];
    this.setState({selectedCoffeeSack: selectedCoffeeSack});
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingCoffeeSack = (coffeeSackToEdit) => {
    const editedMainCoffeeList = this.state.mainCoffeeList
      .filter(coffeeSack => coffeeSack.id !== this.state.selectedCoffeeSack.id)
      .concat(coffeeSackToEdit);
    this.setState({
      mainCoffeeList: editedMainCoffeeList,
      editing: false,
      selectedCoffeeSack: null
    });
  }

  handleDeletingCoffeeSack = (id) => {
    const newMainCoffeeList = this.state.mainCoffeeList.filter(coffeeSack => coffeeSack.id !== id);
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      selectedCoffeeSack: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <CoffeeEdit
        coffeeSack = {this.state.selectedCoffeeSack}
        onCoffeeEdit = {this.handleEditingCoffeeSack} />
      buttonText = "Back to Inventory";
    } else if (this.state.selectedCoffeeSack != null) {
      currentlyVisibleState = <CoffeeDetail
        coffeeSack = {this.state.selectedCoffeeSack}
        onClickingDelete = {this.handleDeletingCoffeeSack}
        onClickingEdit = {this.handleEditClick} />
      buttonText = "Back to Inventory";
    }else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewCoffeeSack
        onNewCoffeeSackCreation = {this.handleAddingNewCoffeeSack} />
      buttonText = "Back to Inventory"
    } else {
      currentlyVisibleState = <CoffeeList
        coffeeList = {this.state.mainCoffeeList}
        onCoffeeSackSelection = {this.handleUpdatingSelectedCoffeeSack} />
      buttonText = "Add Inventory"
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default CoffeeControl;