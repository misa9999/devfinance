import { useContext } from "react";

import styled from "styled-components";

import { GlobalContext } from "../context/GlobalState";

import IncomeImg from "../assets/images/income.svg";
import ExpenseImg from "../assets/images/expense.svg";
import TotalImg from "../assets/images/total.svg";

const BalanceContainer = styled.div`
  margin-top: -6rem;

  h2 {
    color: white;
    margin-top: 0;
  }
`;

const Card = styled.div`
  background: #fff;
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  margin-bottom: 2rem;
  color: #363f5f;

  h3 {
    font-weight: normal;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  p {
    font-size: 2rem;
    line-height: 3rem;
    margin-top: 1rem;
  }

  p.money.plus {
    color: #2ecc71;
  }

  p.money.minus {
    color: #c0392b;
  }

  &:last-child {
    background: #49aa26;
    color: #fff;
  }
`;

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0);

  return (
    <BalanceContainer className="balance">
      <Card>
        <h3>
          <span>Income</span>
          <img src={IncomeImg} alt="Income" />
        </h3>
        <p className="money plus">${income}</p>
      </Card>
      <Card>
        <h3>
          <span>Expense</span>
          <img src={ExpenseImg} alt="Expense" />
        </h3>
        <p className="money minus">${expense}</p>
      </Card>
      <Card>
        <h3>
          <span>Your Balance</span>
          <img src={TotalImg} alt="Total" />
        </h3>
        <p>${total}</p>
      </Card>
    </BalanceContainer>
  );
};
