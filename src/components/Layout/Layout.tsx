import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ClubPage } from '../../pages/ClubPage';
import { MainPage } from '../../pages/MainPage';
import { NewsPage } from '../../pages/NewsPage';
import { NotFoundPage } from '../../pages/NotFoundPage';
import { Header } from '../Header';
import Styled from './Layout.styles';

const Layout: FC = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route
          path={'/'}
          element={<MainPage />}
        />
        <Route
          path={'/news'}
          element={<NewsPage />}
        />
        <Route
          path={'/club'}
          element={<ClubPage />}
        />
        <Route
          path={'*'}
          element={<NotFoundPage />}
        />
      </Routes>
    </>
  );
};

export default Layout;
