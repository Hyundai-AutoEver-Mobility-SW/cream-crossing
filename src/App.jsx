import React, { useState } from 'react';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Shop from './pages/Shop';
import Home from './pages/Home';
import Style from './pages/Style';
import { ProductDetail } from './pages/ProductDetail/ProductDetail';
import { ScrollRestoration } from 'react-router-dom';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Header />
          <Outlet />
          <Footer />
          <ScrollRestoration />
        </>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'shop',
          element: <Shop isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />,
        },
        {
          path: 'style',
          element: <Style />,
        },
        {
          path: 'detail/:id',
          element: <ProductDetail />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
