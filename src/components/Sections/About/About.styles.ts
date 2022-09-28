import styled from 'styled-components';
import { EThemeColors } from '../../../assets/styles/theme/ThemeColors';

const Wrapper = styled.section`
  color: ${EThemeColors.primaryFont};
`;

const Container = styled.div`
  max-width: 1296px;
  margin: 0px auto;
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 110px;
`;

const Img = styled.img`
  margin: 0px -86px 0px 0px;
  z-index: 1;
`;

const BoxContent = styled.div`
  width: 636px;
  height: 654px;
  padding: 70px 60px 0px 146px;
  background-color: #f7ece1;
`;

const Title = styled.h2`
  margin: 0px 0px 25px 0px;
  font-weight: bold;
  font-size: 2.571rem;
`;

const Description = styled.div`
  margin: 0px 0px 35px 0px;
`;

const TitleList = styled.h3`
  margin: 0px 0px 25px 0px;
  font-weight: bold;
  font-size: 1.5rem;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 202px;
`;

const Item = styled.li`
  &::before {
    display: inline-block;
    content: '';
    width: 8px;
    height: 8px;
    margin: 0px 23px 0px 0px;
    background-color: ${EThemeColors.block};
  }
`;

const StyledAbout = {
  Wrapper,
  Container,
  Inner,
  Img,
  BoxContent,
  Title,
  Description,
  TitleList,
  List,
  Item,
};

export default StyledAbout;
