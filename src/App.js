import styled from 'styled-components';

import { Header } from './components/Header';
import { Balance } from './components/Balance';

import { GlobalStyle } from "./GlobalStyle";

const Container = styled.main`
  width: min(90vw, 800px);
  margin: auto;
`;

function App() {
  return (
    <>
      <Header />
      <Container>
        <Balance />
      </Container>
      <GlobalStyle />
    </>
  );
}

export default App;
