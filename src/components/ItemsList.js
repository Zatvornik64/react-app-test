import React from 'react';
import {items, visible} from './ItemData.js'
import { Article } from './Article'

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
    export { ItemsList }