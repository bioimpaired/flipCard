import React, { Component } from "react";
import "./App.css";
import Card from "./Component/Card";

import coffeeImage from "./coffee.jpeg";

const text =
  "Café au lait crema so cup est single shot acerbic. Saucer as, black crema organic single origin mocha. Half and half as iced caffeine robusta wings instant. Caramelization brewed con panna, aftertaste, seasonal, froth and, a medium ristretto caramelization caffeine. Mocha crema, lungo, bar, roast in coffee that latte as grinder latte. Cortado, acerbic, grounds coffee doppio brewed sweet. Id, plunger pot single shot, filter, galão spoon blue mountain aged beans. As whipped et chicory aftertaste java robusta est half and half.";

const shortType = {
  type: "shortText",
  back: "Back of Card 1",
  front: "Front of Card 1"
};
const longType = {
  type: "longText",
  back: text,
  front: "Front of Card 2"
};
const imageType = {
  type: "image",
  back: coffeeImage,
  front: "Front of Card 3"
};

class App extends Component {
  constructor(props) {
    super(props);

    // mimic redux state
    this.state = {
      blocks: [shortType, imageType, longType]
    };
  }
  render() {
    return (
      <div className="App">
        <div className="title-header">Flashcards Block</div>
        {/* set some kind of max width to have only 3 */}
        <div className="d-flex flex-wrap m-1">
          {this.state.blocks.map(block => (
            <Card data={block} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
