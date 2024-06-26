import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
    display:none;
  }
`;

export const Span = styled.span`
  font-size: 2rem;
`;

export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
`;
export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-area: 1 / 4 / 2 / 6;

  `;
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: ${(props) => props.hide ? 'none' : 'flex'};
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.md} {
    display: ${(props) => props.hide ? 'flex' : 'none'};
    justify-content: flex-start;
    align-items: center;
  }

`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: #1d1e4e;
  transition: 0.4s ease;
  &:hover {
    color: #000;
    opacity: 1;
    cursor: pointer;
    font-weight: 500;
    transition: 0.3s ease;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding: 2rem;
    display: ${(props) => props.hide ? 'none' : 'flex'}
  }

`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;


// Social Icons 

export const SocialIcons = styled.a`
transition: 0.3s ease;
color: #1d1e4e;
border-radius: 50px;
display:flex;
justtify-content: center;
align-items: center;

  padding: 8px;
&:hover {
    background-color: #e0f3e1;
    transform: scale(1.2);
    cursor: pointer;

    @media ${(props) => props.theme.breakpoints.sm} {
      transform: scale(1.05);
      transition: 0.3s ease;
    }
    
    @media ${(props) => props.theme.breakpoints.md} {
      transform: scale(1.05);
      transition: 0.3s ease;
    }

  }
`