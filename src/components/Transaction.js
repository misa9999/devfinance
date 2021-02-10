import React, { useContext } from "react";
import MinusImg from "../assets/images/minus.svg";

import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  //Money formatter
  const moneyFormatter = (value) => {
    const sign = Number(value) < 0 ? "-" : "";

    value = String(value).replace(/\D/g, "");
    value = Number(value);

    value = value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    return sign + value;
  };

  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <tr>
      <td className="description">{transaction.description}</td>
      <td className={transaction.amount > 0 ? "income" : "expense"}>
        {moneyFormatter(transaction.amount)}
      </td>
      <td>{transaction.date}</td>
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
