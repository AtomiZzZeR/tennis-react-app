import React from 'react';
import Styled from './Price.styles';
import { v4 as uuid } from 'uuid';
import icon from '../../../assets/images/price/icon.svg';

interface IContent {
  id: string;
  content: string;
}

const Price = () => {
  const content: IContent[] = [
    { id: uuid(), content: 'Зимний сезон 2021-2022' },
    { id: uuid(), content: 'Абонементы' },
    { id: uuid(), content: 'Скидки' },
    { id: uuid(), content: 'Дополнительные услуги' },
  ];

  return (
    <Styled.Wrapper>
      <Styled.Title>Цены и абонементы</Styled.Title>

      <div>
        {content.map(({ id, content }) => (
          <Styled.Block key={id}>
            <div>{content}</div>
            <img
              src={icon}
              alt={'icon link'}
            />
          </Styled.Block>
        ))}
      </div>
    </Styled.Wrapper>
  );
};

export default Price;
