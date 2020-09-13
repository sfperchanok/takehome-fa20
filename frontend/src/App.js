import React, { Component } from 'react'
import Instructions from './Instructions'
import Restaurant from './Restaurant'
import Counter from './Counter'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants: [
        {id: 1, name: "Golden Harbor", rating: 10},
        {id: 2, name: "Potbelly", rating: 6},
        {id: 3, name: "Noodles and Company", rating: 8},
      ],
      inputValue: ""
    }
  }

  render() {
    return (
      <div className="App">
        <Counter count={0} />
        <Instructions complete={true} />
        {this.state.restaurants.map(x => (
          <Restaurant id={x.id} name={x.name} rating={x.rating} />
        ))}
        <input newName = {this.state.inputValue} onChange={evt => this.updateInput(evt)} />
        <button type="button" onClick={this.handleInput}>input</button>
      </div>
    )
  }

  updateInput(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  handleInput = () => {
    this.setState((prevState) => ({
      restaurants: [...prevState.restaurants, {id: prevState.restaurants.length, name: prevState.inputValue, rating: 0}]
    }));
  }
}

export default App
