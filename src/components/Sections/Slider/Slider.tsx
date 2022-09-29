import React from 'react';
import Styled from './Slider.styles';
import iconLeft from '../../../assets/images/services/icon-left.svg';
import iconRight from '../../../assets/images/services/icon-right.svg';
import img from '../../../assets/images/slider/img.jpg';

const Slider = () => {
  return (
    <Styled.Wrapper>
      <Styled.BoxMain>
        <Styled.Title>Фото кортов</Styled.Title>

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
        <Styled.Img background={img}>
          <Styled.Link href={'#'}>Летний корт</Styled.Link>
        </Styled.Img>
      </Styled.BoxImg>
    </Styled.Wrapper>
  );
};

export default Slider;
