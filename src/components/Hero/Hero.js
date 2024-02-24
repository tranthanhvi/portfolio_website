import React from 'react';

import { Section, Button, SectionTitle, SectionText} from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

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
    </LeftSection>
  </Section >
);

export default Hero;