import styled from 'styled-components'

export const ImageContainer = styled.div`
  text-align: center;
  background-image: radial-gradient(50% 50% at 50% 50%, rgba(79, 108, 176, 0.25) 53.8%, rgba(79, 108, 176, 0) 100%);
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${props => props.theme.breakpoints.lg} {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }
  @media ${props => props.theme.breakpoints.md} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`

export const MainImage = styled.img`
  width: 100%;
`

export const TechCard = styled.div`
  border-radius: 10px;
  width: 400px;
  display: flex;
  justtify-content: flex-start;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 85%;
  }
`;

export const TechCardLogo = styled.div`
  z-index: 20;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:0.5rem 0;
    width: 85%;
  }
`;


export const TechCardContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  padding: 0;
  display: flex;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:0;
  }
`;


export const Logo = styled.img`
  width: 100%;
  height:100%;
  object-fit: cover;
  max-width: 100px;
  padding: 1rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 55px;
    padding: 0;

  }


`



// export const List = styled.ul`
//   list-style-type: none;
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 40px;
//   margin: 3rem 0;
  
//   @media ${props => props.theme.breakpoints.lg}{
//     margin: 64px 0;
//   }

//   @media ${props => props.theme.breakpoints.md}{
//     margin: 64px 0;
//     gap: 24px
//   }
  
//   @media ${props => props.theme.breakpoints.sm}{
//     display: flex;
//     flex-direction: column;
//     margin: 32px 0;
//   }
// `

// export const ListContainer = styled.div`
//   display: flex;
//   flex-direction: column;

//   @media ${props => props.theme.breakpoints.sm}{
//     display: flex;
//     margin-left: 18px;
//   }
// `

// export const ListTitle = styled.h4`
//   font-weight: 700;
//   font-size: 28px;
//   line-height: 32px;
//   letter-spacing: 0.02em;
//   color: #FFFFFF;
//   margin-bottom: 8px;

// @media ${props => props.theme.breakpoints.md}{
//   font-size: 24px;
//   line-height: 28px;
// }

// @media ${props => props.theme.breakpoints.sm}{
//   font-size: 20px;
//   line-height: 28px;
//   letter-spacing: 0.02em;
//   margin-bottom: 4px;
// }
// `

// export const ListParagraph = styled.p`
//   font-size: 18px;
//   line-height: 30px;
//   color: rgba(255, 255, 255, 0.75);

//   @media ${props => props.theme.breakpoints.md}{
//     font-size: 16px;
//     line-height: 28px;
//   }

//   @media ${props => props.theme.breakpoints.sm}{
//     font-size: 14px;
//     line-height: 22px;
//   }
// `

// export const ListItem = styled.li`
//   max-width: 320px;
//   display: flex;
//   flex-direction: column;

// @media ${props => props.theme.breakpoints.md}{
//   max-width: 203px;
// }

// @media ${props => props.theme.breakpoints.sm}{
//   margin-bottom: 14px;
//   max-width: 320px;
//   flex-direction: row;
// }
// `

// export const ListIcon = styled.img`
//   display: block;
//   width: 48px;
//   height: 48px;
//   margin-bottom: 10px;
  
//   @media ${props => props.theme.breakpoints.md}{
//     width: 40px;
//     height: 40px;
//     margin-bottom: 8px;
//   }

//   @media ${props => props.theme.breakpoints.sm}{
//     width: 32px;
//     height: 32px;
//     margin-bottom: 0px;
//   }
// `
