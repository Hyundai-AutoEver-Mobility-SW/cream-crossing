import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ShopSelectModal from '../components/common/ShopSelectModal';

function Shop({ isModalOpen, setIsModalOpen, toggleHeader }) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/shop') {
      setIsModalOpen(true);
      toggleHeader();
    } else {
      setIsModalOpen(false);
    }
  }, [location]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate('/');
  };

  return <>{isModalOpen && <ShopSelectModal onClose={handleCloseModal} />}</>;
}

export default Shop;
