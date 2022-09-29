import React from 'react';
import { Cover } from '../../components/Cover';
import Styled from './NotFoundPage.styles';
import bgImg from '../../assets/images/cover/bg-club.jpg';

const NotFoundPage = () => {
  return (
    <Styled.Wrapper>
      <Cover
        bgImg={bgImg}
        title={'Страница не найдена'}
      />
    </Styled.Wrapper>
  );
};

export default NotFoundPage;
