import { FC } from 'react';
import Styled from './Header.styles';
import logo from '../../assets/images/header/logo.svg';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { Contacts } from '../Contacts';
import { IContact } from '../Contacts/Contacts';
import iconYt from '../../assets/images/icon-youtube-white.svg';
import iconVk from '../../assets/images/icon-vkontakte-white.svg';
import iconTg from '../../assets/images/icon-telegram-white.svg';
import { Menu } from '../Menu';
import { ILink } from '../Menu/Menu';
import { EThemeColors } from '../../assets/styles/theme/ThemeColors';

const Header: FC = () => {
  const menu: ILink[] = [
    { id: uuid(), path: '/tennis-react-app/', name: 'Главная' },
    { id: uuid(), path: '/tennis-react-app/club', name: 'О клубе' },
    { id: uuid(), path: '/tennis-react-app/news', name: 'Новости' },
    { id: uuid(), path: '/tennis-react-app/services', name: 'Услуги' },
    { id: uuid(), path: '/tennis-react-app/kids', name: 'Детский теннис' },
    { id: uuid(), path: '/tennis-react-app/gallery', name: 'Галерея' },
    { id: uuid(), path: '/tennis-react-app/prices', name: 'Цены' },
    { id: uuid(), path: '/tennis-react-app/contacts', name: 'Контакты' },
  ];

  const contacts: IContact[] = [
    { icon: iconYt, link: 'https://www.youtube.com/channel/UCP3pg4AucaTjVUlSaeoyAvA' },
    { icon: iconVk, link: 'https://vk.com/siolisme' },
    { icon: iconTg, link: 'https://t.me/Yleephac' },
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

          <Menu
            menu={menu}
            color={EThemeColors.font}
          />

          <Contacts contacts={contacts} />
        </Styled.Inner>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Header;
