import { FC, PropsWithChildren } from 'react';
import Styled from './Home.styles';
import iconPlay from '../../../assets/images/home/icon-play.svg';
import iconLink from '../../../assets/images/home/icon-link.svg';
import { v4 as uuid } from 'uuid';

interface IBlockInfo {
  id: string;
  topic: string;
  title: string;
}

const Home: FC<PropsWithChildren> = ({ children }) => {
  const topic = 'Услуги';

  const content: IBlockInfo[] = [
    { id: uuid(), topic, title: 'Аренда Корта' },
    { id: uuid(), topic, title: 'Детский теннис' },
    { id: uuid(), topic, title: 'Сборы комманд' },
    { id: uuid(), topic: 'Турниры', title: 'Расписание' },
  ];

  return (
    <Styled.Wrapper>
      {children}
      <Styled.Container>
        <Styled.Inner>
          <Styled.Title>
            Петербургский
            <br /> теннисный клуб
            <br /> имени М.А. Пасечникова
          </Styled.Title>

          <Styled.Box>
            <Styled.Circle>
              <Styled.Link href={'#'}>
                <Styled.Icon
                  src={iconPlay}
                  alt={'icon play'}
                />
              </Styled.Link>
            </Styled.Circle>

            <Styled.Text>Посмотрите видео о нашем клубе</Styled.Text>
          </Styled.Box>
        </Styled.Inner>

        <Styled.BoxBlocks>
          {content.map(({ id, topic, title }) => (
            <Styled.Block key={id}>
              <Styled.TopicBlock>{topic}</Styled.TopicBlock>
              <Styled.TitleBlock>{title}</Styled.TitleBlock>

              <Styled.LinkIcon href={'#'}>
                <img
                  src={iconLink}
                  alt={'icon link'}
                />
              </Styled.LinkIcon>
            </Styled.Block>
          ))}
        </Styled.BoxBlocks>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Home;
