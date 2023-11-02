import { createBrowserRouter } from 'react-router-dom';

import commonRoutes from './common';
import protectedRoutes from './protected';

const AppRoutes = () => {
  const routes = protectedRoutes;

  const router = createBrowserRouter([...commonRoutes, ...routes]);

  return router;
};

export default AppRoutes;
