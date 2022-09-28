import styled from 'styled-components';
import { EThemeColors } from '../../assets/styles/theme/ThemeColors';

const Wrapper = styled.footer`
  background-color: #f7ece1;
`;

const Container = styled.div`
  max-width: 1296px;
  margin: 0px auto;
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 96px;
`;

const Copyright = styled.div`
  color: ${EThemeColors.primaryFont};
  opacity: 0.3;
`;

const Menu = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 742px;
`;

const Link = styled.a`
  color: ${EThemeColors.primaryFont};
`;

const BoxContacts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 138px;
`;

const StyledFooter = {
  Wrapper,
  Container,
  Inner,
  Copyright,
  Menu,
  Link,
  BoxContacts,
};

export default StyledFooter;
