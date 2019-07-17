import React from 'react';

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
   export { Article }