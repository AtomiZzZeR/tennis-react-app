import React, { FC } from 'react';
import { Cover } from '../../components/Cover';
import Styled from './NewsPage.styles';
import bgImg from '../../assets/images/cover/bg-news.jpg';
import { NewsItem } from '../../components/NewsItem';
import { v4 as uuid } from 'uuid';
import img1 from '../../assets/images/news/img1.jpg';
import img2 from '../../assets/images/news/img2.jpg';
import img3 from '../../assets/images/news/img3.jpg';
import img4 from '../../assets/images/news/img4.jpg';
import img5 from '../../assets/images/news/img5.jpg';
import img6 from '../../assets/images/news/img6.jpg';
import { INewsItem } from '../../components/NewsItem/NewsItem';
import { Footer } from '../../components/Footer';

const NewsPage: FC = () => {
  const date = '22 июля 2022 года';

  const items: INewsItem[] = [
    {
      id: uuid(),
      img: img1,
      date,
      content: `Consequat consequat augue quis urna arcu scelerisque ac montes, sed. 
			Arcu orci quam lectus orci in.`,
    },
    {
      id: uuid(),
      img: img2,
      date: '4 апреля 2022 года',
      content: `Suspendisse orci fermentum congue enim risus velit neque. Mi.`,
    },
    {
      id: uuid(),
      img: img3,
      date: '30 ноября 2021 года',
      content: `Interdum proin amet nibh tortor sed vulputate mattis. 
				Ridiculus porta ipsum neque ut vel vitae et.`,
    },
    {
      id: uuid(),
      img: img4,
      date,
      content: `Nisl tempor vel tempor adipiscing id nulla magnis ut ultrices. 
				Malesuada metus et in blandit.`,
    },
    {
      id: uuid(),
      img: img5,
      date,
      content: `Libero fermentum pretium sed orci nunc, sagittis mollis lacus dolor. 
				Tincidunt et enim sed ac faucibus.`,
    },
    {
      id: uuid(),
      img: img6,
      date,
      content: `Netus hendrerit tortor laoreet duis proin nulla faucibus ultricies. 
				Et urna fringilla nunc, metus nec. `,
    },
  ];

  return (
    <Styled.Wrapper>
      <Cover
        bgImg={bgImg}
        title={'Новости'}
      />

      <Styled.Main>
        {items.map(({ id, img, date, content }) => (
          <NewsItem
            id={id}
            img={img}
            date={date}
            content={content}
            key={id}
          />
        ))}
      </Styled.Main>

      <Footer />
    </Styled.Wrapper>
  );
};

export default NewsPage;
