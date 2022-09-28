import styled from 'styled-components';
import { EThemeColors } from '../../../assets/styles/theme/ThemeColors';

const Wrapper = styled.section`
  width: 636px;
  height: 454px;
`;

const BoxMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0px 74px 0px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 330px;
  border: 1px solid #f7ece1;
`;

const StyledServices = {
  Wrapper,
  BoxMain,
  Title,
  BoxButtons,
  Button,
  BoxImg,
};

export default StyledServices;
