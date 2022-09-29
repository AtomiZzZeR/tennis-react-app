import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { About } from '../../components/Sections/About';
import { Advantages } from '../../components/Sections/Advantages';
import { Home } from '../../components/Sections/Home';
import { Price } from '../../components/Sections/Price';
import { Services } from '../../components/Sections/Services';
import { Trainers } from '../../components/Sections/Trainers';
import Styled from './MainPage.styles';
const Layout = () => {
  return (
    <Styled.Wrapper>
      <Styled.Main>
        <Home />

        <Styled.BoxSection>
          <Advantages />
        </Styled.BoxSection>

        <Styled.BoxSection>
          <About />
        </Styled.BoxSection>

        <Styled.BoxSection>
          <Trainers />
        </Styled.BoxSection>

        <Styled.BoxTwoSections>
          <Price />
          <Services />
        </Styled.BoxTwoSections>

        <Footer />
      </Styled.Main>
    </Styled.Wrapper>
  );
};

export default Layout;
