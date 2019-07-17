import React from 'react';
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
   export { Article2 }