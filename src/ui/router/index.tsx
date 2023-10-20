import { createBrowserRouter } from 'react-router-dom';

import { About } from '@/ui/pages/About';
import { Home } from '@/ui/pages/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);
