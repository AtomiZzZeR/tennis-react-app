import styled from 'styled-components';
import { EThemeColors } from '../../../assets/styles/theme/ThemeColors';

const Wrapper = styled.section`
  width: 526px;
`;

const Title = styled.h2`
  margin: 0px 0px 75px 0px;
  font-weight: bold;
  font-size: 2.571rem;
  color: ${EThemeColors.primaryFont};
`;

const Block = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0px 30px;
  font-weight: bold;
  font-size: 1.5rem;
  color: ${EThemeColors.font};
  background-color: ${EThemeColors.block};

  &:not(:last-child) {
    margin: 0px 0px 30px 0px;
  }
`;

const StyledPrice = {
  Wrapper,
  Title,
  Block,
};

export default StyledPrice;
