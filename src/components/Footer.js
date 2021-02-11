import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 4rem 0 2rem;
  color: #363f5f;
  opacity: 0.6;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <p>dev.finance$</p>
    </FooterContainer>
  );
};
