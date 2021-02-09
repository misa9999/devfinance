import styled from 'styled-components';
import LogoImg from '../assets/images/logo.svg'

const HeaderContainer = styled.div`
  background: #2D4A22;
  padding: 2rem 0 10rem;
  text-align: center;
`

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={LogoImg} alt="logo" />
    </HeaderContainer>
  )
}