import { useState } from 'react';

import styled from 'styled-components';

import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { TransactionList } from './components/TransactionList';
import { Modal } from './components/Modal';
import { Footer } from './components/Footer';

import { GlobalStyle } from './GlobalStyle';

import { GlobalProvider } from './context/GlobalState';

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
        <TransactionList setShowModal={setShowModal} />
      </Container>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <Footer />
      <GlobalStyle />
    </GlobalProvider>
  );
}

export default App;
