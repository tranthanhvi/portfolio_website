import React from 'react';

import { Section, Button, SectionTitle, SectionText} from '../../styles/GlobalComponents';
import { HeroButton, LeftSection } from './HeroStyles';
import { Div3 } from '../Header/HeaderStyles';
import { SocialIcons } from '../Header/HeaderStyles';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';

const Hero = () => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
        Hello, <br />
        I am Thanh
      </SectionTitle>
      <SectionText>
        I like to <HeroButton href='https://spangle-estimate-da8.notion.site/b88ede15872e49f69b26725bba1eb9d2?v=00583c37fe044f67817590df87e9fb59' target='_blank'>read</HeroButton>, love to <HeroButton href='https://tranthanhvi.github.io/cooking-receipe-website/'>cook</HeroButton>, and ofc <HeroButton href='https://github.com/tranthanhvi' target='_blank'>CODE</HeroButton> TO LIVE!
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/tranthanhvi'}>Reach me</Button>
      <Div3 hide>
        <SocialIcons href='https://github.com/tranthanhvi'>
          <AiFillGithub size='2rem' />
        </SocialIcons>
        <SocialIcons href='https://www.linkedin.com/in/tran-thanh-2900b31a0/'>
          <AiFillLinkedin size='2rem' />
        </SocialIcons>
        <SocialIcons href='https://www.instagram.com/xanhvitran/'>
          <AiFillInstagram size='2rem' />
        </SocialIcons>
      </Div3>
    </LeftSection>
  </Section >
);

export default Hero;
