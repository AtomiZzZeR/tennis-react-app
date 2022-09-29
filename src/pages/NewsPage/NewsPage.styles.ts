import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Main = styled.main`
  flex: 1 1 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1296px;
  margin: 0px auto 120px;
  padding: 80px 0px 0px 0px;
`;

const StyledNewsPage = {
  Wrapper,
  Main,
};

export default StyledNewsPage;
