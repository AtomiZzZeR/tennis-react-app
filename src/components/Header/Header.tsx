import { FC } from 'react';
import Styled from './Header.styles';
import logo from '../../assets/images/header/logo.svg';
import iconYt from '../../assets/images/header/icon-youtube.svg';
import iconVk from '../../assets/images/header/icon-vkontakte.svg';

const Header: FC = () => {
  const links: string[] = ['Главная', 'О клубе', 'Турниры', 'Услуги', 'Детский теннис', 'Галерея', 'Цены', 'Контакты'];

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
            {links.map((name) => (
              <Styled.Link
                href={'#'}
                key={name}
              >
                {name}
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
