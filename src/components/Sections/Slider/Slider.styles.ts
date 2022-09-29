import styled from 'styled-components';
import { EThemeColors } from '../../../assets/styles/theme/ThemeColors';

interface IImgProps {
  background: string;
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 610px;
`;

const BoxMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 2.571rem;
  color: ${EThemeColors.primaryFont};
`;

const BoxButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 105px;
`;

const Button = styled.button`
  width: 45px;
  height: 45px;
  background-color: ${EThemeColors.block};
`;

const BoxImg = styled.div`
  height: 500px;
  border: 1px solid #f7ece1;
`;

const Img = styled.div<IImgProps>`
  position: relative;
  background: url(${(props) => props.background}) no-repeat;
  margin: 25px 20px;
  height: 450px;
`;

const Link = styled.a`
  position: absolute;
  left: 50px;
  bottom: 40px;
  display: inline-block;
  padding: 10px 20px;
  font-weight: bold;
  font-size: 1.286rem;
  color: ${EThemeColors.font};
  background-color: ${EThemeColors.block};
`;

const StyledSlider = {
  Wrapper,
  BoxMain,
  Title,
  BoxButtons,
  Button,
  BoxImg,
  Img,
  Link,
};

export default StyledSlider;
