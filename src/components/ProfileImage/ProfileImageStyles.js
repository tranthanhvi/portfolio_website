import styled from 'styled-components';


export const ProfileImgBox = styled.div`
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    order: 1;
    margin: 5rem auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    margin: 5rem auto auto auto;
  }
`;



export const ProfileImg = styled.img`
  padding: 2rem;
  max-width: 300px;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    margin: 2rem auto;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 180px;
    display: flex;
    margin: 0 auto;
  }
`;

const TooltipText = styled.span`
    visibility: hidden;
    position: absolute;
    z-index: 2;
    width: 100px;
    color: white;
    font-size: 12px;
    background-color: #192733;
    border-radius: 10px;
    padding: 10px 15px 10px 15px;
`

