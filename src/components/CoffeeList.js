import React from "react";
import CoffeeSack from "./CoffeeSack";

function CoffeeList(){
  return (
    <React.Fragment>
      <hr />
      {props.coffeeList.map((coffeeSack) =>
      <CoffeeSack
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

export default CoffeeList;