import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ClubPage } from '../../pages/ClubPage';
import { MainPage } from '../../pages/MainPage';
import { NewsPage } from '../../pages/NewsPage';
import { NotFoundPage } from '../../pages/NotFoundPage';
import { Footer } from '../Footer';
import { Header } from '../Header';
import Styled from './Layout.styles';

const Layout: FC = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route
          path={'/tennis-react-app/'}
          element={<MainPage />}
        />
        <Route
          path={'/tennis-react-app/news'}
          element={<NewsPage />}
        />
        <Route
          path={'/tennis-react-app/club'}
          element={<ClubPage />}
        />
        <Route
          path={'/tennis-react-app/*'}
          element={<NotFoundPage />}
        />
      </Routes>

      <Footer />
    </>
  );
};

export default Layout;
