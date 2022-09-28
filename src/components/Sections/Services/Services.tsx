import React from 'react';
import Styled from './Services.styles';
import iconLeft from '../../../assets/images/services/icon-left.svg';
import iconRight from '../../../assets/images/services/icon-right.svg';
import img from '../../../assets/images/services/img.jpg';

const Services = () => {
  return (
    <Styled.Wrapper>
      <Styled.BoxMain>
        <Styled.Title>Услуги</Styled.Title>

        <Styled.BoxButtons>
          <Styled.Button>
            <img
              src={iconLeft}
              alt={'icon arrow left'}
            />
          </Styled.Button>
          <Styled.Button>
            <img
              src={iconRight}
              alt={'icon arrow right'}
            />
          </Styled.Button>
        </Styled.BoxButtons>
      </Styled.BoxMain>

      <Styled.BoxImg>
        <img
          src={img}
          alt={'image cafe'}
        />
      </Styled.BoxImg>
    </Styled.Wrapper>
  );
};

export default Services;
