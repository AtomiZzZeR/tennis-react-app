import styled from 'styled-components';
import { EThemeColors } from '../../../assets/styles/theme/ThemeColors';

interface IImg {
  src: string;
}

const Wrapper = styled.section``;

const Container = styled.div`
  max-width: 1296px;
  margin: 0px auto;
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 416px;
  height: 500px;
  border: 1px solid #f7ece1;
`;

const Img = styled.div<IImg>`
  display: flex;
  justify-content: center;
  width: 376px;
  height: 450px;
  padding: 334px 0px 0px 0px;
  background: url(${(props) => props.src});
`;

const Content = styled.h3`
  max-width: 317px;
  font-weight: bold;
  font-size: 1.929rem;
  text-align: center;
  color: ${EThemeColors.font};
`;

const StyledAdvantages = {
  Wrapper,
  Container,
  Inner,
  Block,
  Img,
  Content,
};

export default StyledAdvantages;
