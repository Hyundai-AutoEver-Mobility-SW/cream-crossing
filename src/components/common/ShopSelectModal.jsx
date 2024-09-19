import styled, { keyframes } from 'styled-components';
import { BiCurrentLocation } from 'react-icons/bi';
import { IoMdSearch } from 'react-icons/io';
import { useState } from 'react';
import { calculateDistance } from '../../utils/kakaomap';
const popIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.2);
  }
  70% {
    opacity: 1;
    transform: scale(1.3);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;
const S_ShopSelectModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 520px;
  height: 100%;
  z-index: 100;
  background-color: rgba(255, 234, 180, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 1s ease-in;
  .modal-content {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    opacity: 0;
    animation: ${popIn} 0.5s ease-out 1s forwards;
    transform: scale(0.2);
  }
  .close-btn {
    position: absolute;
    max-width: 363px;
    width: 40%;
    bottom: 5%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
  .map-contents {
    position: absolute;
    width: 80%;
    top: 28%;
    opacity: 0;
    animation: ${popIn} 0.5s ease-out 1s forwards;
    .search {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 5px;

      .search-bg {
        display: block;
        position: relative;
        width: 70%;
      }
      .search-content {
        position: absolute;
        width: 70%;
        top: 50%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
        padding: 0 40px;
        transform: translateY(-50%);
        .icon {
          font-size: 40px;
          color: #ff9f02; // 아이콘 색상
        }

        .search-input {
          border: none;
          outline: none;
          padding: 5px 13px;
          font-size: 1.6em;
          border-radius: 30px;
          /* background-color: #ff9f02; */
          background-color: transparent;
          color: #6e3c32;
          &::placeholder {
            color: #6e3c32;
          }
        }
      }
    }
    .desc {
      font-size: 1em;
      color: #6e3c32;
      text-align: center;
      margin-bottom: 10px;
    }
    .btn-list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
      justify-items: center;
      .btn-item {
        position: relative;
        width: 100%;
        text-align: center;
        cursor: pointer;
        .btn-green,
        .btn-blue {
          width: 100%;
          display: block;
        }

        .store-name {
          position: absolute;
          top: 30%;
          left: 30%;
          transform: translateX(-50%);
          color: #6e3c32;
          font-size: 2em;
        }
        .store-dist {
          position: absolute;
          top: 30%;
          right: 10%;
          transform: translateX(-50%);
          color: #6e3c32;
          font-size: 1.1em;
        }
      }
    }
  }
`;

function ShopSelectModal({ onClose }) {
  const [sortedStores, setSortedStores] = useState([
    { name: '고양점', distance: 0 },
    { name: '광명점', distance: 27.18 },
    { name: '기흥점', distance: 50.17 },
    { name: '동부산점', distance: 343.26 },
  ]);
  const [searchInput, setSearchInput] = useState('');
  const [searchedLocation, setSearchedLocation] = useState({
    address_name: '고양점',
    lat: 37.6585,
    lng: 126.8314,
  }); // 고양점 위치

  const handleStoreClick = store => {
    const kakaoMapLink = `https://map.kakao.com/link/to/${store.name},${store.lat},${store.lng}`;
    window.open(kakaoMapLink, '_blank');
  };

  const handleCloseBackgroundClick = e => {
    console.log(e.target);
    if (e.target === e.currentTarget) {
      onClose(); // 배경을 클릭했을 때 모달 닫기
    }
  };
  const handleSearch = () => {
    const ps = new kakao.maps.services.Places(); // 장소 검색 객체 생성
    // 장소 검색 API 호출
    ps.keywordSearch(searchInput, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        console.log(data[0]);
        setSearchedLocation({ address_name: data[0].address_name, lat: data[0].y, lng: data[0].x });
        setSortedStores(calculateDistance({ lat: data[0].y, lng: data[0].x }));
        console.log(sortedStores);
        console.log('searchedLocation:', searchedLocation.address_name);
      } else {
        console.error('Search failed:', status);
      }
    });
  };
  return (
    <>
      <S_ShopSelectModal onClick={handleCloseBackgroundClick} className="font-gamja text-xl">
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <img className="bg" src="/img/bg_manga.png" alt="" />
          <div className="map-contents">
            <div className="search">
              <img className="search-bg" src="/img/btn_orange.png" alt="" />
              <div className="search-content">
                <BiCurrentLocation className="icon cursor-pointer" />
                <input
                  type="text"
                  className="search-input"
                  placeholder="위치로 검색"
                  value={searchInput}
                  onChange={e => setSearchInput(e.target.value)}
                />
                <IoMdSearch className="icon cursor-pointer" onClick={handleSearch} />
              </div>
            </div>
            <div className="desc">매장은 "{searchedLocation.address_name}" 에서의 거리순으로 나열되어 있습니다.</div>
            <div className="btn-list">
              <div className="btn-item" onClick={handleStoreClick}>
                <img className="btn-green" src="/img/btn_green.png" alt="" />
                <span className="store-name">1. {sortedStores[0].name}</span>
                <span className="store-dist">{sortedStores[0].distance}km</span>
              </div>
              <div className="btn-item">
                <img className="btn-green" src="/img/btn_green.png" alt="" />
                <span className="store-name">2. {sortedStores[1].name}</span>
                <span className="store-dist">{sortedStores[1].distance}km</span>
              </div>
              <div className="btn-item">
                <img className="btn-blue" src="/img/btn_blue.png" alt="" />
                <span className="store-name">3. {sortedStores[2].name}</span>
                <span className="store-dist">{sortedStores[2].distance}km</span>
              </div>
              <div className="btn-item">
                <img className="btn-blue" src="/img/btn_blue.png" alt="" />
                <span className="store-name">4. {sortedStores[3].name}</span>
                <span className="store-dist">{sortedStores[3].distance}km</span>
              </div>
            </div>
          </div>
          <img className="close-btn" onClick={onClose} src="/img/btn_close_off.png" alt="" />
        </div>
      </S_ShopSelectModal>
    </>
  );
}

export default ShopSelectModal;
