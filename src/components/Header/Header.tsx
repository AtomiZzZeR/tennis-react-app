import { FC } from 'react';
import Styled from './Header.styles';
import logo from '../../assets/images/header/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    { id: uuid(), path: '/tennis-react-app/', name: 'Главная' },
    { id: uuid(), path: '/tennis-react-app/club', name: 'О клубе' },
    { id: uuid(), path: '/tennis-react-app/news', name: 'Новости' },
    { id: uuid(), path: '/tennis-react-app/services', name: 'Услуги' },
    { id: uuid(), path: '/tennis-react-app/kids', name: 'Детский теннис' },
    { id: uuid(), path: '/tennis-react-app/gallery', name: 'Галерея' },
    { id: uuid(), path: '/tennis-react-app/prices', name: 'Цены' },
    { id: uuid(), path: '/tennis-react-app/contacts', name: 'Контакты' },
  ];

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Inner>
          <Link to={'/tennis-react-app/'}>
            <img
              src={logo}
              alt={'header logo'}
            />
          </Link>

          <Styled.Menu>
            {links.map(({ id, path, name }) => (
              <Styled.Link key={id}>
                <Link to={path}>
                  <Styled.TextLink>{name}</Styled.TextLink>
                </Link>
              </Styled.Link>
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
