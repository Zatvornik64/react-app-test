import React from 'react';
import { CardArticle } from './CardArticle'
import '../css/Card.css';


class Card extends React.Component {
  
    cardHandler = (evt) => {
      if (evt.target.classList.contains('count_sub')) {
        if (this.props.data[evt.target.id].count > 0) this.props.data[evt.target.id].count--;
        this.forceUpdate();
      }
      if (evt.target.classList.contains('count_null')) {
        this.props.data[evt.target.id].count = 0;
        this.forceUpdate();
      }
    }
  
    itemsListOpenHandler = () => {
      this.props.onMenu();
    }
  
    dellAllHandler = () => {
      this.props.data.forEach(function(item) {
        item.count = 0;
      });
      this.forceUpdate();
    }
  
    render() {
      let sum = 0;
      let itemsTemplate = this.props.data.map((item) => {
        sum += item.price * item.count;
       return (
        <React.Fragment key={item.id}>
          { item.count ? <CardArticle  data={item}/> : null }
         </React.Fragment>
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
        <div className="sum">Общая стоимость :   $<b>{sum}</b></div>
        </div>
        <button className="card_btn card_button" onClick={this.itemsListOpenHandler}>Список покупок</button>
        <button className="card_btn card_button" onClick={this.dellAllHandler}>Очистить все</button>
        </React.Fragment>
      )
    }}
   export { Card }