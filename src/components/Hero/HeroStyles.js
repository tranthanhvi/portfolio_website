import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 2rem 0 0;
  }

`;


export const HeroButton = styled.a`
  transition: 0.3s ease;
  color: #1abd2e;
  border-radius: 50px;
  display:flex;
  justtify-content: center;
  align-items: center;
  margin: 0;
  display: inline;
    padding: 1px;
  &:hover {
      color: #086414;
      transform: scale(1.2);
      cursor: pointer;
      font-weight: 400;

`