import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height: auto;
  object-fit: cover;
  overflow: hidden;
  border-radius: 10px 10px 0 0; 
`

export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    height: 80%;
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #1d1e4e;
  padding: 1.5rem 0;

  font-size: ${(props) => props.title ? '3rem' : '2rem'};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
  }  

`;

export const Hr = styled.hr`
  width: 70px;
  height: 3px;
  margin: 10px auto;
  border: 0;
  background: linear-gradient(90deg, rgba(29,30,78,1) 0%, rgba(61,122,68,1) 100%);;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #2A363B;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#e0f3e1;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #1d1e4e;
border-radius: 15px;
transition: 0.5s;
&:hover{
  color: #e8eec8; 
  background: #1d384e;

}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: #3d7a44;
font-size: 1.5rem;
`