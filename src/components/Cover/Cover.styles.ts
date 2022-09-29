import styled from 'styled-components';
import { EThemeColors } from '../../assets/styles/theme/ThemeColors';

interface IWrapperProps {
  bgImg: string;
}

const Wrapper = styled.div<IWrapperProps>`
  height: 263px;
  background: url(${(props) => props.bgImg}) 50% no-repeat;
`;

const Container = styled.div`
  max-width: 1296px;
  margin: 0px auto;
`;

const Inner = styled.div`
  display: flex;
  justify-content: center;
  padding: 136px 0px 0px 0px;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 3.429rem;
  color: ${EThemeColors.font};
`;

const StyledCover = {
  Wrapper,
  Container,
  Inner,
  Title,
};

export default StyledCover;
