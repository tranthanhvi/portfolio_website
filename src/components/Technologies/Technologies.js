import React from 'react';
import { GridContainer, Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { technologies } from '../../constants/constants';
import { HeaderThree} from '../Projects/ProjectsStyles';
import { TechCard, TechCardLogo, TechCardContent, Logo } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I've work with a range of technologies in the web development world. 
    </SectionText>
    <GridContainer>
      {technologies.map(( {id, logo, name}) => (
        <TechCard key={id}>
          <TechCardLogo>
            <Logo src={logo} alt='logo'/>
            {/* <svg xmlns={logo}  style={{width: '50px', height: '50px'}} ><path d={d}></path></svg> */}
          </TechCardLogo>
          <TechCardContent>
            <HeaderThree>{name}</HeaderThree>
          </TechCardContent>
        </TechCard>
      ))}
    </GridContainer>
  </Section>
);

export default Technologies;
