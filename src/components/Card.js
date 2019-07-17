import React from 'react';
import {items, visible} from './ItemData.js'
import { Article2 } from './Article2'
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
   export { Card }