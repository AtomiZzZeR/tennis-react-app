import styled from 'styled-components';
import { EThemeColors } from '../../../assets/styles/theme/ThemeColors';

const Wrapper = styled.section`
  margin: 0px 0px 150px 0px;
  color: ${EThemeColors.font};
  background: url('../bg-home.jpg') 50% no-repeat;
`;

const Container = styled.div`
  max-width: 1296px;
  margin: 0px auto;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 743px;
`;

const Title = styled.h1`
  margin: 0px 0px 60px 0px;
  font-weight: bold;
  font-size: 3.429rem;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 266px;
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border: 1px solid ${EThemeColors.font};
  border-radius: 50%;
`;

const Link = styled.a`
  display: inline-block;
  width: 64px;
  height: 64px;
  background-color: ${EThemeColors.block};
  border-radius: 50%;
`;

const Icon = styled.img`
  padding: 22px 24px;
`;

const Text = styled.div`
  width: 156px;
  font-size: 1.286rem;
`;

const BoxBlocks = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Block = styled.div`
  position: relative;
  width: 315px;
  height: 151px;
  padding: 35px 0px 0px 35px;
  background-color: ${EThemeColors.block};
`;

const TopicBlock = styled.div`
  margin: 0px 0px 17px 0px;
  font-weight: bold;
  font-size: 1.286rem;
`;

const TitleBlock = styled.h2`
  font-weight: bold;
  font-size: 1.714rem;
`;

const LinkIcon = styled.a`
  position: absolute;
  top: 72px;
  right: 35px;
`;

const StyledHome = {
  Wrapper,
  Container,
  Inner,
  Title,
  Box,
  Circle,
  Link,
  Icon,
  Text,
  BoxBlocks,
  Block,
  TopicBlock,
  TitleBlock,
  LinkIcon,
};

export default StyledHome;
