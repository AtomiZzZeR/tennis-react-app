import { FC } from 'react';
import { Contacts } from '../Contacts';
import { IContact } from '../Contacts/Contacts';
import Styled from './Footer.styles';
import iconYt from '../../assets/images/icon-youtube-purple.svg';
import iconVk from '../../assets/images/icon-vkontakte-purple.svg';
import iconTg from '../../assets/images/icon-telegram-purple.svg';
import { Menu } from '../Menu';
import { v4 as uuid } from 'uuid';
import { EThemeColors } from '../../assets/styles/theme/ThemeColors';
import { ILink } from '../Menu/Menu';

const Footer: FC = () => {
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
          <Styled.Copyright>2022 © Все права защищены.</Styled.Copyright>

          <Menu
            menu={menu}
            color={EThemeColors.primaryFont}
          />

          <Contacts contacts={contacts} />
        </Styled.Inner>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Footer;
