import React, { useContext } from 'react';
import MinusImg from '../assets/images/minus.svg';

import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
  // money formatter
  const moneyFormatter = (value) => {
    const sign = Number(value) < 0 ? '-' : '';

    value = String(value).replace(/\D/g, '');
    value = Number(value);

    value = value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    return sign + value;
  };

  // date formatter
  const dateFormatter = (date) => {
    const splittedDate = date.split('-');

    return `${splittedDate[1]}/${splittedDate[2]}/${splittedDate[0]}`;
  };

  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <tr>
      <td className="description">{transaction.description}</td>
      <td className={transaction.amount > 0 ? 'income' : 'expense'}>
        {moneyFormatter(transaction.amount)}
      </td>
      <td>{dateFormatter(transaction.date)}</td>
      <td>
        <button
          onClick={() => deleteTransaction(transaction.id)}
          className="delete-btn"
        >
          <img src={MinusImg} alt="Minus" />
        </button>
      </td>
    </tr>
  );
};
