import styled from "styled-components";

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

  &:last-child {
    background: #49aa26;
    color: #fff;
  }
`;

const HTML = ({ value, Img, amount }) => {
  return (
    <>
      <h3>
        <span>{value}</span>
        <img src={Img} alt="Income" />
      </h3>
      <p>{amount}</p>
    </>
  );
};

export const Balance = () => {
  return (
    <BalanceContainer className="balance">
      <Card>
        <HTML value={"Income"} Img={IncomeImg} amount={0} />
      </Card>
      <Card>
        <HTML value={"Expense"} Img={ExpenseImg} amount={0} />
      </Card>
      <Card>
        <HTML value={"Your balance"} Img={TotalImg} amount={0} />
      </Card>
    </BalanceContainer>
  );
};
