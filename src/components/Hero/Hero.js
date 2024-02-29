import React from 'react';

import { Section, Button, SectionTitle, SectionText} from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';
import { Div3 } from '../Header/HeaderStyles';
import { SocialIcons } from '../Header/HeaderStyles';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, <br />
        I am Thanh
      </SectionTitle>
      <SectionText>
        I like to read, love to cook, and ofc CODE TO LIVE!
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/tranthanhvi'}>Reach me</Button>
      <Div3 hide>
        <SocialIcons href='https://github.com/tranthanhvi'>
          <AiFillGithub size='3rem' />
        </SocialIcons>
        <SocialIcons href='https://www.linkedin.com/in/tran-thanh-2900b31a0/'>
          <AiFillLinkedin size='3rem' />
        </SocialIcons>
        <SocialIcons href='https://www.instagram.com/xanhvitran/'>
          <AiFillInstagram size='3rem' />
        </SocialIcons>
      </Div3>
    </LeftSection>
  </Section >
);

export default Hero;