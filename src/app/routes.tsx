import * as React from 'react';
import { AppName } from '.';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from '@app/Pages/Dashboard/Dashboard';
import { Support } from '@app/Pages/Support/Support';
import { GeneralSettings } from '@app/Pages/Settings/General/GeneralSettings';
import { ProfileSettings } from '@app/Pages/Settings/Profile/ProfileSettings';
import { NotFound } from '@app/Pages/NotFound/NotFound';

export interface IAppRoute {
  label?: string; // Excluding the label will exclude the route from the nav sidebar in AppLayout
  /* eslint-disable @typescript-eslint/no-explicit-any */
  element: React.ReactElement;
  /* eslint-enable @typescript-eslint/no-explicit-any */
  exact?: boolean;
  path: string;
  title: string;
  routes?: undefined;
}

export interface IAppRouteGroup {
  label: string;
  routes: IAppRoute[];
}

export type AppRouteConfig = IAppRoute | IAppRouteGroup;

const routes: AppRouteConfig[] = [
  {
    element: <Dashboard />,
    exact: true,
    label: 'Dashboard',
    path: '/',
    title: AppName + ' | Main Dashboard',
  },
  {
    element: <Support />,
    exact: true,
    label: 'Support',
    path: '/support',
    title: AppName + ' | Support Page',
  },
  {
    label: 'Settings',
    routes: [
      {
        element: <GeneralSettings />,
        exact: true,
        label: 'General',
        path: '/settings/general',
        title: AppName + ' | General Settings',
      },
      {
        element: <ProfileSettings />,
        exact: true,
        label: 'Profile',
        path: '/settings/profile',
        title: AppName + ' | Profile Settings',
      },
    ],
  },
];

const flattenedRoutes: IAppRoute[] = routes.reduce(
  (flattened, route) => [...flattened, ...(route.routes ? route.routes : [route])],
  [] as IAppRoute[],
);

const AppRoutes = (): React.ReactElement => (
  <Routes>
    {flattenedRoutes.map(({ path, element }, idx) => (
      <Route path={path} element={element} key={idx} />
    ))}
    <Route element={<NotFound />} />
  </Routes>
);

export { AppRoutes, routes };
