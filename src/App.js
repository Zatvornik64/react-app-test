import React from 'react';
import './App.css';
import { ItemsList } from './components/ItemsList'
import { Card } from './components/Card'
import {items, visible} from './components/ItemData.js'

class App extends React.Component {
  state = {mainVisible: visible}

  changeHandler = () => {
    this.setState({mainVisible: visible})
  }

render () {
  return (
      <React.Fragment>
        { this.state.mainVisible.list && <ItemsList onMenu={this.changeHandler} data={items}  />}
        { this.state.mainVisible.card && <Card onMenu={this.changeHandler} data={items} />}
      </React.Fragment>
    )
  }
}

export default App;