import styled from 'styled-components';
import { EThemeColors } from '../../../assets/styles/theme/ThemeColors';

const Wrapper = styled.section``;

const Title = styled.h2`
  margin: 0px 0px 80px 0px;
  font-weight: bold;
  font-size: 2.571rem;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BoxChapters = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 432px;
`;

const TitleChapter = styled.h3`
  font-weight: bold;
  font-size: 1.5rem;
  width: 357.72px;
`;

const BoxContent = styled.div`
  width: 865.95px;
  height: 956px;
`;

const BlockContent = styled.div``;

const TitleContent = styled.h4`
  margin: 0px 0px 25.18px 0px;
  font-weight: bold;
  font-size: 1.286rem;
`;

const ListContent = styled.ul`
  margin: 0px 0px 40.29px 0px;
`;

const ItemContent = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin: 0px 0px 14px 0px;
  }

  &::before {
    content: '';
    display: inline-block;
    width: 14.66px;
    height: 3.02px;
    margin: 0px 14.66px 0px 0px;
    background-color: ${EThemeColors.block};
  }
`;

const Content = styled.div`
  margin: 0px 0px 25.6px 0px;
`;

const StyledRules = {
  Wrapper,
  Title,
  Box,
  BoxChapters,
  TitleChapter,
  BoxContent,
  BlockContent,
  TitleContent,
  ListContent,
  ItemContent,
  Content,
};

export default StyledRules;
