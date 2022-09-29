import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Main = styled.main`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1296px;
  margin: 0px auto;
  padding: 80px 0px 0px 0px;

  & section {
    margin: 0px 0px 120px 0px;
  }
`;

const StyledClubPage = {
  Wrapper,
  Main,
};

export default StyledClubPage;
