import React from 'react';

class CardArticle extends React.Component {

  subHandler = (evt) => {
    this.props.countSubHandler(evt);
  }
  nullHandler = (evt) => {
    this.props.countNullHandler(evt);
  }

    render() {    
    
      return (       
        <React.Fragment>
           <tr>
            <td className="items_name">{this.props.data.name}</td>
            <td className="items_price">${this.props.data.price}</td>
            <td className="items_count">{this.props.data.count}</td>
            <td><button className="count_sub" onClick={this.subHandler} id={this.props.data.id}>-</button></td>
            <td><button className="count_null" onClick={this.nullHandler} id={this.props.data.id}>Удалить все</button></td>
          </tr> 
        </React.Fragment> 
       )}}
    
      
  
   export { CardArticle }