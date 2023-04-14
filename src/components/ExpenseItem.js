import React from 'react';
import './ExpenseItem.css';

class ExpenseItem extends React.Component {
   render() {
      return (
         <div className="itemStyle">
            <div><b>Item:</b> <em>Mango Juice</em></div>
            <div><b>Amount:</b> <em>30.00</em></div>
            <div><b>Spend Date:</b> <em>2020-10-10</em></div>
            <div><b>Category:</b> <em>Food</em></div>
         </div>
      );
   }
}
export default ExpenseItem;