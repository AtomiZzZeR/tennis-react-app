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
  width: 739px;
`;

const TextLink = styled.a`
  color: ${EThemeColors.font};
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
  TextLink,
  BoxIcons,
};

export default StyledHeader;
