import React from 'react';
import { ItemsListArticle } from './ItemsListArticle'
import '../css/ItemsList.css';

class ItemsList extends React.Component {

    countAddHandler = (evt) => {
      this.props.data[evt.target.id].count++;
        this.forceUpdate();
    }
    cardOpenHandler = () => {
      this.props.onMenu();
    }
  
    render() {
      let itemsTemplate = this.props.data.map((item) => {
       return (
         <ItemsListArticle countAddHandler={this.countAddHandler} key={item.id} data={item}/>
       )})
  
      return (
        <React.Fragment>
        <div className="table_border" >
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