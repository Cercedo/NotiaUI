import { RouteObject } from 'react-router-dom';

import { ErrorPage, LandingPage } from '@/features/misc';

const commonRoutes: RouteObject[] = [
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
];

export default commonRoutes;
