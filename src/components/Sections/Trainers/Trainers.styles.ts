import styled from 'styled-components';
import { EThemeColors } from '../../../assets/styles/theme/ThemeColors';

const Wrapper = styled.section`
  margin: 0px 0px 150px 0px;
`;

const Container = styled.div`
  max-width: 1296px;
  margin: 0px auto;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BoxMain = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 0px 75px 0px;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 2.571rem;
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

const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledTrainers = {
  Wrapper,
  Container,
  Inner,
  BoxMain,
  Title,
  BoxButtons,
  Button,
  Box,
};

export default StyledTrainers;
