import { FC } from 'react';
import Styled from './NewsItem.styles';

export interface INewsItem {
  id: string;
  img: string;
  date: string;
  content: string;
}

const NewsItem: FC<INewsItem> = ({ img, date, content }) => {
  return (
    <Styled.Wrapper>
      <Styled.Image
        src={img}
        alt={'image tennis'}
      />
      <Styled.TextDate>{date}</Styled.TextDate>
      <Styled.Content>{content}</Styled.Content>
      <Styled.Link href={'#'}>Подробнее</Styled.Link>
    </Styled.Wrapper>
  );
};

export default NewsItem;
