import css from './TransactionHistory.module.css';
import { List } from './TransactionHistoryList.jsx';

export const TransactionHistory = ({ data }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        <List data={data} />
      </tbody>
    </table>
  );
};

// <table class="transaction-history">
//   <thead>
//     <tr>
//       <th>Type</th>
//       <th>Amount</th>
//       <th>Currency</th>
//     </tr>
//   </thead>

//   <tbody>
// <tr>
//   <td>Invoice</td>
//   <td>125</td>
//   <td>USD</td>
// </tr>
// <tr>
//   <td>Withdrawal</td>
//   <td>85</td>
//   <td>USD</td>
// </tr>
//   </tbody>
// </table>;
