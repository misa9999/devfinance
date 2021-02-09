import { useState } from "react";

import styled from "styled-components";

import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { Transaction } from "./components/TransactionList";

import { GlobalStyle } from "./GlobalStyle";

import { GlobalProvider } from "./context/GlobalState";

const Container = styled.main`
  width: min(90vw, 800px);
  margin: auto;
`;

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <GlobalProvider>
      <Header />
      <Container>
        <Balance />
        <Transaction setShowModal={setShowModal} />
      </Container>
      <GlobalStyle />
    </GlobalProvider>
  );
}

export default App;
