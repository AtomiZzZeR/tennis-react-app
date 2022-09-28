import React from 'react';
import { Header } from '../Header';
import { Home } from '../Sections/Home';
import { Advantages } from '../Sections/Advantages';
import Styled from './Layout.styles';
import { About } from '../Sections/About';
import { Trainers } from '../Sections/Trainers';
import { Price } from '../Sections/Price';
import { Services } from '../Sections/Services';
import { Footer } from '../Footer';

const Layout = () => {
  return (
    <Styled.Wrapper>
      <Styled.Main>
        <Home>
          <Header />
        </Home>

        <Styled.BoxSection>
          <Advantages />
        </Styled.BoxSection>

        <Styled.BoxSection>
          <About />
        </Styled.BoxSection>

        <Styled.BoxSection>
          <Trainers />
        </Styled.BoxSection>

        <Styled.BoxTwoSections>
          <Price />
          <Services />
        </Styled.BoxTwoSections>

        <Footer />
      </Styled.Main>
    </Styled.Wrapper>
  );
};

export default Layout;
