import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import App from './App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [{ index: true, element: <App /> }],
  },
]);

export const Router: React.FC = () => <RouterProvider router={router} />;
