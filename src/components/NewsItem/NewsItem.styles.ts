import styled from 'styled-components';
import { EThemeColors } from '../../assets/styles/theme/ThemeColors';

const Wrapper = styled.div`
  width: 416px;
  height: 512px;
  padding: 30px 40px;
  border: 1px solid #f7ece1;
`;

const Image = styled.img`
  margin: 0px 0px 25px 0px;
`;

const TextDate = styled.div`
  margin: 0px 0px 15px 0px;
  opacity: 0.5;
`;

const Content = styled.div`
  height: 87px;
  margin: 0px 0px 20px 0px;
  font-weight: bold;
  font-size: 1.5rem;
  color: ${EThemeColors.primaryFont};
`;

const Link = styled.a`
  display: inline-block;
  padding: 10px 20px;
  font-weight: bold;
  font-size: 1.286rem;
  color: ${EThemeColors.font};
  background-color: ${EThemeColors.block};
`;

const StyledNewsItem = {
  Wrapper,
  Image,
  TextDate,
  Content,
  Link,
};

export default StyledNewsItem;
