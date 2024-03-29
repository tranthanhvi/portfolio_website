import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';
 
import { PrefixedLink } from '../../styles/GlobalComponents/prefixedlink';

const Header = () =>  (
  <Container>
    <Div1>
        <a href="/"style={{ display: "flex", alignItems: "center", color: "#1d1e4e", marginBottom: '20px', fontWeight: '600' }}>
          <Span>THANH</Span>
        </a>
    </Div1>
    <Div2>
      <li>
        <NavLink href='#projects'>Projects</NavLink>
      </li>
      <li>
          <NavLink href='#tech'>Technologies</NavLink>
      </li>
      <li>
          <NavLink href='#about'>About</NavLink>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/tranthanhvi' target="_blank">
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/tran-thanh-2900b31a0/' target="_blank">
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.instagram.com/xanhvitran/' target="_blank">
        <AiFillInstagram size='3rem' />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
