import styled from 'styled-components';

const Wrapper = styled.div`
  width: 196px;
  height: 398px;
  text-align: center;
`;

const BoxImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 240px;
  margin: 0px 0px 25px 0px;
  border: 1px solid #f7ece1;
`;

const Img = styled.img``;

const BoxName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 58px;
  margin: 0px 0px 15px 0px;
`;

const Name = styled.h3`
  font-weight: bold;
  font-size: 1.5rem;
`;

const Content = styled.div``;

const StyledTrainer = {
  Wrapper,
  BoxImg,
  Img,
  BoxName,
  Name,
  Content,
};

export default StyledTrainer;
