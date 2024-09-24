import { useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Shop from './pages/Shop';
import Home from './pages/Home';
import Style from './pages/Style';
import { ProductDetail } from './pages/ProductDetail/ProductDetail';
import { ScrollRestoration } from 'react-router-dom';
import * as S from './styles/App.style';
import Basket from './components/basket/Basket';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [rotationDegree, setRotationDegree] = useState(0);
  const [svgColor, setSvgColor] = useState('black');

  const toggleHeader = () => {
    setShowHeader(!showHeader);
    setRotationDegree(prevDegree => prevDegree + 180);
  };
  useEffect(() => {
    const handleScroll = () => {
      console.log(scrollY);
      if (scrollY > 780 && scrollY <= 2700) {
        setSvgColor('gray');
      } else {
        setSvgColor('black');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <div className="home-container">
            <S.ToggleButton onClick={toggleHeader}>
              <svg
                style={{
                  transform: `rotate(${rotationDegree}deg)`,
                  transition: 'transform 0.6s ease-in-out',
                  color: svgColor,
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                  <path strokeDasharray="20" strokeDashoffset="20" d="M12 3l0 17.5">
                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="20;0" />
                  </path>
                  <path strokeDasharray="12" strokeDashoffset="12" d="M12 21l7 -7M12 21l-7 -7">
                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.6s" values="12;0" />
                  </path>
                </g>
              </svg>
            </S.ToggleButton>
            <Header showHeader={showHeader} />
            <Outlet />
            <Footer />
            <ScrollRestoration />
          </div>
        </>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'shop',
          element: <Shop isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} toggleHeader={toggleHeader} />,
        },
        {
          path: 'style',
          element: <Style />,
        },
        {
          path: 'detail/:id',
          element: <ProductDetail />,
        },
        {
          path: 'cart',
          element: <Basket />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
