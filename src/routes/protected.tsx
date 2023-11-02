import { RouteObject } from 'react-router-dom';

import { AppLayout } from '@/components/Layout';
import loadNoteNavigationItem from '@/components/Layout/AppLayout/utils/loadNoteNavigationItem';
import { EmptyPage, ErrorPage } from '@/features/misc';
import { Notes } from '@/features/notes';

const protectedRoutes: RouteObject[] = [
  {
    path: '/app',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    loader: loadNoteNavigationItem,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <EmptyPage /> },
          {
            path: 'notes/',
            element: <Notes />,
          },
        ],
      },
    ],
  },
];

export default protectedRoutes;
