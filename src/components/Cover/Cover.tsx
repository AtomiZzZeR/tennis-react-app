import { FC } from 'react';
import Styled from './Cover.styles';

interface ICoverProps {
  bgImg: string;
  title: string;
}

const Cover: FC<ICoverProps> = ({ bgImg, title }) => {
  return (
    <Styled.Wrapper bgImg={bgImg}>
      <Styled.Container>
        <Styled.Inner>
          <Styled.Title>{title}</Styled.Title>
        </Styled.Inner>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Cover;
