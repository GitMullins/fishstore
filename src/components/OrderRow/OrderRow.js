import React from 'react';

class orderRow extends React.Component {
  render() {
    const { order } = this.props;
    return (
      <tr>
        <th>{order.id}</th>
        <td>{order.dateTime}</td>
        <td>5</td>
        <button className={'btn btn-danger'}>x</button>
      </tr>
    );
  }
}

export default orderRow;
