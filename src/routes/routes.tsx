import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';

import NotFound from '@/pages/NotFound';
import Home from '@/pages/Home';
import Products from '@/pages/Products';
import Checkout from '@/pages/Checkout';

import ProductDetails from '@/pages/ProductDetails';
import { SignUpForm } from '@/components/SignUpForm';
import { LoginForm } from '@/components/LoginForm';


const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/product-details/:id',
        element: <ProductDetails />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '/login',
        element: <LoginForm />,
      },
      {
        path: '/signup',
        element: <SignUpForm />,
      },
    ],
  },
 
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default routes;
