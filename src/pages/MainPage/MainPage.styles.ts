import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Main = styled.main`
  flex: 1 1 auto;
`;

const BoxSection = styled.div`
  max-width: 1296px;
  margin: 0px auto 150px;
`;

const BoxTwoSections = styled(BoxSection)`
  display: flex;
  justify-content: space-between;
`;

const StyledMainPage = {
  Wrapper,
  Main,
  BoxSection,
  BoxTwoSections,
};

export default StyledMainPage;
