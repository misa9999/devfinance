import { useContext } from "react";
import styled from "styled-components";

import { Transaction } from "../components/Transaction";

import { GlobalContext } from "../context/GlobalState";

const TransactionContainer = styled.section`
  display: block;
  width: 100%;
  overflow-x: auto;

  a {
    color: #49aa26;
    text-decoration: none;
  }

  a:hover {
    color: #3dd705;
  }

  .button.new {
    color: #49aa26;
    display: inline-block;
    margin-bottom: 0.8rem;
    border: none;
    cursor: pointer;
    outline: none;
  }

  .button.new:hover {
    color: #3dd705;
  }
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 0 0.5rem;
  color: #969cb3;

  thead th {
    background: white;

    font-weight: normal;
    padding: 1rem 2rem;

    text-align: left;
  }

  tbody tr {
    opacity: 0.7;
  }

  tbody tr:hover {
    opacity: 1;
  }

  tbody td {
    background: white;
    padding: 1rem 2rem;
  }

  td.description {
    color: #363f5f;
  }
  td.income {
    color: #12a454;
  }
  td.expense {
    color: #e92929;
  }

  .delete-btn {
    cursor: pointer;
    border: 0;
    outline: none;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  tbody tr:hover .delete-btn {
    opacity: 1;
  }
`;

export const TransactionList = ({ setShowModal }) => {
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const { transactions } = useContext(GlobalContext);

  return (
    <TransactionContainer>
      <button className="button new" onClick={openModal}>
        + New Transaction
      </button>
      <h3>History</h3>
      <Table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Value</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </tbody>
      </Table>
    </TransactionContainer>
  );
};
