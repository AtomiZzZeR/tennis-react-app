import styled from 'styled-components';
import { EThemeColors } from '../../assets/styles/theme/ThemeColors';

const Wrapper = styled.header`
  position: absolute;
  width: 100%;
  height: 105px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

const Container = styled.div`
  max-width: 1296px;
  margin: 0px auto;
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 105px;
`;

const Menu = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 738px;
`;

const Link = styled.div``;

const TextLink = styled.a`
  color: ${EThemeColors.font};
  transition: 0.5s;
  border: 1px solid transparent;

  &:hover {
    padding: 0px 20px;
    border-bottom: 1px solid #fff;
  }
`;

const BoxIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 92px;
`;

const StyledHeader = {
  Wrapper,
  Container,
  Inner,
  Menu,
  Link,
  TextLink,
  BoxIcons,
};

export default StyledHeader;
