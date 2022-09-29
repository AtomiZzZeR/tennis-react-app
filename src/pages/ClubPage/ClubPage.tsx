import React from 'react';
import { Cover } from '../../components/Cover';
import Styled from './ClubPage.styles';
import bgImg from '../../assets/images/cover/bg-club.jpg';
import { Slider } from '../../components/Sections/Slider';
import { AboutClub } from '../../components/Sections/AboutClub';
import { Rules } from '../../components/Sections/Rules';
import { Footer } from '../../components/Footer';

const ClubPage = () => {
  return (
    <Styled.Wrapper>
      <Cover
        bgImg={bgImg}
        title={'О клубе'}
      />
      <Styled.Main>
        <Slider />

        <AboutClub />

        <Rules />
      </Styled.Main>

      <Footer />
    </Styled.Wrapper>
  );
};

export default ClubPage;
