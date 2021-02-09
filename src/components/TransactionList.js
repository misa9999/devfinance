import styled from "styled-components";

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

export const Transaction = ({ setShowModal }) => {
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <TransactionContainer>
      <button className="button new" onClick={openModal}>
        + New Transaction
      </button>
    </TransactionContainer>
  );
};
