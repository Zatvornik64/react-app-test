import React from 'react';
import { ItemsList } from './components/ItemsList'
import { Card } from './components/Card'




class App extends React.Component {
  state = { 
    items : [
    {
      id: 0,
      name: `Item 1`,
      price: 890,
      count: 0
    },
    {
      id: 1,
      name: `Item 2`,
      price: 20,
      count: 3
    },
    {
      id: 2,
      name: `Item 3`,
      price: 428,
      count: 0
    },
    {
      id: 3,
      name: `Item 4`,
      price: 45,
      count: 23
    }
  ], 
  cardOpen : false}

  changeHandler = () => {
    this.setState({cardOpen : !this.state.cardOpen})
  }

render () {
  return (
      <React.Fragment>
        { !this.state.cardOpen && <ItemsList onMenu={this.changeHandler} data={this.state.items} />}
        { this.state.cardOpen && <Card onMenu={this.changeHandler} data={this.state.items} />}
      </React.Fragment>
    )
  }
}

export default App;