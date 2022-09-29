import styled from 'styled-components';
import { EThemeColors } from '../../../assets/styles/theme/ThemeColors';

const Wrapper = styled.section`
  color: ${EThemeColors.primaryFont};
`;

const Title = styled.h2`
  margin: 0px 0px 60px 0px;
  font-weight: bold;
  font-size: 2.571rem;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Img = styled.img`
  margin: 0px -86px 0px 0px;
  z-index: 1;
`;

const BoxContent = styled.div`
  width: 856px;
  height: 654px;
  padding: 70px 60px 76px 146px;
  background-color: #f7ece1;
`;

const TitleContent = styled.h3`
  margin: 0px 0px 40px 0px;
  font-weight: bold;
  font-size: 2.571rem;
`;

const Content = styled.div`
  margin: 0px 0px 57px 0px;
`;

const BoxBlocks = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Block = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 63px;
`;

const Icon = styled.img`
  margin: 0px 17.17px 0px 0px;
`;

const TitleBlock = styled.h4`
  font-weight: bold;
`;

const StyledAboutClub = {
  Wrapper,
  Title,
  Box,
  Img,
  BoxContent,
  TitleContent,
  Content,
  BoxBlocks,
  Block,
  Icon,
  TitleBlock,
};

export default StyledAboutClub;
