import React from 'react';
import Styled from './Footer.styles';
import logoYt from '../../assets/images/footer/icon-youtube.svg';
import logoVk from '../../assets/images/footer/icon-vkontakte.svg';
import logoTg from '../../assets/images/footer/icon-telegram.svg';

const Footer = () => {
  const menu: string[] = ['Главная', 'О клубе', 'Турниры', 'Услуги', 'Детский теннис', 'Галерея', 'Цены', 'Контакты'];

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Inner>
          <Styled.Copyright>2022 © Все права защищены.</Styled.Copyright>

          <Styled.Menu>
            {menu.map((link) => (
              <Styled.Link
                href={'#'}
                key={link}
              >
                {link}
              </Styled.Link>
            ))}
          </Styled.Menu>

          <Styled.BoxContacts>
            <a
              href={'https://www.youtube.com/channel/UCP3pg4AucaTjVUlSaeoyAvA'}
              target={'_blank'}
            >
              <img
                src={logoYt}
                alt={'icon youtube'}
              />
            </a>
            <a
              href={'https://vk.com/siolisme'}
              target={'_blank'}
            >
              <img
                src={logoVk}
                alt={'icon vkontakte'}
              />
            </a>
            <a
              href={'https://t.me/Yleephac'}
              target={'_blank'}
            >
              <img
                src={logoTg}
                alt={'icon telegram'}
              />
            </a>
          </Styled.BoxContacts>
        </Styled.Inner>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Footer;
