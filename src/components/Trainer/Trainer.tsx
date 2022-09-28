import { FC } from 'react';
import Styled from './Trainer.styles';

interface ITrainerProps {
  id: string;
  img: string;
  name: string;
  content: string;
}

const Trainer: FC<ITrainerProps> = ({ img, name, content }) => {
  return (
    <Styled.Wrapper>
      <Styled.BoxImg>
        <Styled.Img
          src={img}
          alt={'image trainer'}
        />
      </Styled.BoxImg>

      <Styled.BoxName>
        <Styled.Name>{name}</Styled.Name>
      </Styled.BoxName>
      <Styled.Content>{content}</Styled.Content>
    </Styled.Wrapper>
  );
};

export default Trainer;
