import React from 'react';
import Styled from './Advantages.styles';
import { v4 as uuid } from 'uuid';
import img1 from '../../../assets/images/advantages/img1.jpg';
import img2 from '../../../assets/images/advantages/img2.jpg';
import img3 from '../../../assets/images/advantages/img3.jpg';

interface IBlockImg {
  id: string;
  src: string;
  content: string;
}

const Advantages = () => {
  const content: IBlockImg[] = [
    { id: uuid(), src: img1, content: '5 летних грунтовых кортов' },
    { id: uuid(), src: img2, content: 'Зал с покрытием “Искусственная трава”' },
    { id: uuid(), src: img3, content: 'Зал с покрытием “Хард”' },
  ];

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Inner>
          {content.map(({ id, src, content }) => (
            <Styled.Block key={id}>
              <Styled.Img src={src}>
                <Styled.Content>{content}</Styled.Content>
              </Styled.Img>
            </Styled.Block>
          ))}
        </Styled.Inner>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Advantages;
