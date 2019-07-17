import React from 'react';
import './App.css';
const items = [
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
]
const visible = {
  list: true,
  card: false,
}

class Article extends React.Component {
 render() {
  return (
      <tr>
        <td className="items_name">{this.props.data.name}</td>
        <td className="items_price">${this.props.data.price}</td>
        <td className="items_count">{this.props.data.count}</td>
        <td><button className="count_add" id={this.props.data.id}>+</button></td>
      </tr>
    )
}}

class ItemsList extends React.Component {

  itemsListHandler = (evt) => {
    if (evt.target.classList.contains('count_add')) {
    items[evt.target.id].count++;
    this.forceUpdate();
  }}

  cardOpenHandler = () => {
    visible.list = false;
    visible.card = true;
    this.props.onMenu();
  }

  render() {
    let itemsTemplate = this.props.data.map(function(item) {
     return (
       <Article key={item.id} data={item}/>
     )})

    return (
      <React.Fragment>
      <div className="table_border" onClick={this.itemsListHandler}>
        <table>
        <tbody>
          <tr>
            <th>Название</th>
            <th>Цена</th>
            <th>Количество</th>
            <th></th>
          </tr>
        {itemsTemplate}
        </tbody>
      </table>
      </div>
      <button className="card_btn" onClick={this.cardOpenHandler}>Корзина</button>
      </React.Fragment>
      )
    }
  }

class Article2 extends React.Component {
  render() {
  return (
      <tr>
        <td className="items_name">{this.props.data.name}</td>
        <td className="items_price">${this.props.data.price}</td>
        <td className="items_count">{this.props.data.count}</td>
        <td><button className="count_sub" id={this.props.data.id}>-</button></td>
        <td><button className="count_null" id={this.props.data.id}>Удалить все</button></td>
      </tr>
    )
}}

class Card extends React.Component {

  cardHandler = (evt) => {
    if (evt.target.classList.contains('count_sub')) {
      if (items[evt.target.id].count > 0) items[evt.target.id].count--;
      this.forceUpdate();
    }
    if (evt.target.classList.contains('count_null')) {
      items[evt.target.id].count = 0;
      this.forceUpdate();
    }
  }

  itemsListOpenHandler = () => {
    visible.list = true;
    visible.card = false;
    this.props.onMenu();
  }

  dellAllHandler = () => {
    items.forEach(function(item) {
      item.count = 0;
    });
     this.props.onMenu();
  }

  render() {
    let itemsTemplate = this.props.data.map(function(item) {
     return (
       <Article2 key={item.id} data={item}/>
     )})

    return (
      <React.Fragment>
      <div className="table_border" onClick={this.cardHandler}>
        <table>
        <tbody>
          <tr>
            <th>Название</th>
            <th>Цена</th>
            <th>Количество</th>
            <th></th>
          </tr>
        {itemsTemplate}
        </tbody>
      </table>
      </div>
      <button className="card_btn card_button" onClick={this.itemsListOpenHandler}>Список покупок</button>
      <button className="card_btn card_button" onClick={this.dellAllHandler}>Очистить все</button>
      </React.Fragment>
    )
  }}

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