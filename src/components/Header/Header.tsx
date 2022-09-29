import { FC } from 'react';
import Styled from './Header.styles';
import logo from '../../assets/images/header/logo.svg';
import iconYt from '../../assets/images/header/icon-youtube.svg';
import iconVk from '../../assets/images/header/icon-vkontakte.svg';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

interface ILink {
  id: string;
  path: string;
  name: string;
}

const Header: FC = () => {
  const links: ILink[] = [
    { id: uuid(), path: '/', name: 'Главная' },
    { id: uuid(), path: '/club', name: 'О клубе' },
    { id: uuid(), path: '/news', name: 'Новости' },
    { id: uuid(), path: '/1', name: 'Услуги' },
    { id: uuid(), path: '/2', name: 'Детский теннис' },
    { id: uuid(), path: '/3', name: 'Галерея' },
    { id: uuid(), path: '/43', name: 'Цены' },
    { id: uuid(), path: '/5', name: 'Контакты' },
  ];

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Inner>
          <a href={'#'}>
            <img
              src={logo}
              alt={'header logo'}
            />
          </a>

          <Styled.Menu>
            {links.map(({ id, path, name }) => (
              <Link
                to={path}
                key={id}
              >
                <Styled.TextLink>{name}</Styled.TextLink>
              </Link>
            ))}
          </Styled.Menu>

          <Styled.BoxIcons>
            <a
              href={'https://www.youtube.com/channel/UCP3pg4AucaTjVUlSaeoyAvA'}
              target={'_blank'}
            >
              <img
                src={iconYt}
                alt={'icon youtube'}
              />
            </a>
            <a
              href={'https://vk.com/siolisme'}
              target={'_blank'}
            >
              <img
                src={iconVk}
                alt={'icon vkontakte'}
              />
            </a>
          </Styled.BoxIcons>
        </Styled.Inner>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Header;
