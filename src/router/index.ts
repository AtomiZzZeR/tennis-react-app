import React from 'react';
import { ClubPage } from '../pages/ClubPage';
import { MainPage } from '../pages/MainPage';
import { NewsPage } from '../pages/NewsPage';

interface IRoites {
  path: string;
  element: React.ElementType;
}

export enum ERouteNames {
  main = '',
  news = 'news',
  club = 'club',
  error = '*',
}

export const routes: IRoites[] = [
  { path: ERouteNames.main, element: MainPage },
  { path: ERouteNames.news, element: NewsPage },
  { path: ERouteNames.club, element: ClubPage },
  { path: ERouteNames.error, element: MainPage },
];
