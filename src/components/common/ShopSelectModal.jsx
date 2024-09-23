import styled, { keyframes } from 'styled-components';
import { BiCurrentLocation } from 'react-icons/bi';
import { IoMdSearch } from 'react-icons/io';
import { useState } from 'react';
import { calculateDistance, getAddressFromCoords } from '../../utils/kakaomap';
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
  min-width: 750px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 520px;
  height: 100%;
  z-index: 100;
  background-color: rgba(255, 234, 180, 1);
  background: url('/img/bg-farm.png') no-repeat;
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
  img.bg {
    opacity: 0;
    animation: ${popIn} 0.5s ease-out 1s forwards;
    transform: scale(0.2);
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

      .search-bg {
        display: block;
        position: relative;
        width: 70%;
      }
      .search-content {
        position: absolute;
        top: 50%;
        display: flex;
        align-items: center;
        transform: translateY(-50%);
        .contents {
          /* display: flex;
          align-items: center;
          justify-content: center; */
        }
        .icon {
          font-size: 30px;
          color: #ff9f02; // 아이콘 색상
        }

        .search-input {
          margin-left: 10px;
          width: 200px;
          border: none;
          outline: none;
          padding: 5px 13px;
          font-size: 1em;
          border-radius: 30px;
          background-color: transparent;
          /* color: #ff9966; */
          color: transparent;
          -webkit-text-stroke: 2px #ac5a43;
          background: url('/img/snow.png');
          background-size: contain;
          background-clip: text; /* 배경을 텍스트에만 표시 */
          -webkit-background-clip: text;
          text-fill-color: transparent; /* 텍스트를 투명하게 만듦 */
          -webkit-text-fill-color: transparent;

          &::placeholder {
            color: #ff9966;
          }
        }
      }
    }
    .desc {
      font-size: 0.6em;
      color: #ac5a43;
      text-align: center;
    }
    .btn-list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
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
          top: 25%;
          left: 25%;
          transform: translateX(-50%);
          font-size: 1em;
          color: transparent;
          -webkit-text-stroke: 2px #46645b;
          background: url('/img/snow-green.png');
          background-size: contain;
          background-clip: text;
          -webkit-background-clip: text;
          text-fill-color: transparent;
          -webkit-text-fill-color: transparent;
        }
        .store-dist {
          position: absolute;
          top: 25%;
          right: 15%;
          color: #ac5a43;
          font-size: 0.7em;
        }
      }
    }
    .close-btn {
      margin: 0 auto;
      margin-top: 10px;
      max-width: 363px;
      width: 45%;
      cursor: pointer;
    }
  }
`;

function ShopSelectModal({ onClose }) {
  const [sortedStores, setSortedStores] = useState([
    { name: '고양점', distance: 0, lat: 37.6585, lng: 126.8314 },
    { name: '광명점', distance: 27.18, lat: 37.418, lng: 126.8868 },
    { name: '기흥점', distance: 50.17, lat: 37.2694, lng: 127.1191 },
    { name: '동부산점', distance: 343.26, lat: 35.2437, lng: 129.2227 },
  ]);

  const [searchInput, setSearchInput] = useState('');
  const [placeholder, setPlaceholder] = useState('위치로 검색');
  const [searchedLocation, setSearchedLocation] = useState({
    address_name: '고양점',
    lat: 37.6585,
    lng: 126.8314,
  }); // 고양점 위치

  const handleStoreClick = store => {
    const kakaoMapLink = `https://map.kakao.com/link/from/${searchedLocation.address_name},${searchedLocation.lat},${searchedLocation.lng}/to/${store.name},${store.lat},${store.lng}`;

    window.open(kakaoMapLink, '_blank');
  };

  const handleCloseBackgroundClick = e => {
    if (e.target === e.currentTarget) {
      onClose(); // 배경을 클릭했을 때 모달 닫기
    }
  };
  const handleSearch = () => {
    const ps = new kakao.maps.services.Places(); // 장소 검색 객체 생성
    // 장소 검색 API 호출
    ps.keywordSearch(searchInput, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        setSearchedLocation({ address_name: data[0].address_name, lat: data[0].y, lng: data[0].x });
        setSortedStores(calculateDistance({ lat: data[0].y, lng: data[0].x }));
      } else {
        console.error('Search failed:', status);
      }
    });
  };
  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async position => {
          const { latitude, longitude } = position.coords;
          const address = await getAddressFromCoords(longitude, latitude);
          setSearchedLocation({ address_name: address, lat: latitude, lng: longitude });
          setSortedStores(calculateDistance({ lat: latitude, lng: longitude }));
        },
        error => {
          alert('위치 정보를 가져올 수 없습니다.', error);
        },
      );
    }
  };
  return (
    <>
      <S_ShopSelectModal onClick={handleCloseBackgroundClick} className="font-Hakgyoansim text-xl">
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <img className="bg" src="/img/bg_manga-2.png" alt="" />
          <div className="map-contents">
            <div className="search">
              <img className="search-bg" src="/img/btn_orange.png" alt="" />
              <div className="search-content">
                <div className="contents">
                  <BiCurrentLocation
                    onClick={() => {
                      handleCurrentLocation();
                    }}
                    className="icon cursor-pointer"
                  />
                  <input
                    type="text"
                    className="search-input"
                    placeholder={placeholder}
                    value={searchInput}
                    onFocus={() => {
                      setPlaceholder('');
                    }}
                    onBlur={() => {
                      setPlaceholder('위치로 검색');
                    }}
                    onChange={e => setSearchInput(e.target.value)}
                  />
                  <IoMdSearch className="icon cursor-pointer" onClick={handleSearch} />
                </div>
              </div>
            </div>
            <div className="desc">매장은 "{searchedLocation.address_name}" 에서의 거리순으로 나열되어 있습니다.</div>
            <div className="btn-list">
              <div
                className="btn-item"
                onClick={() => {
                  handleStoreClick(sortedStores[0]);
                }}>
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
            <img className="close-btn" onClick={onClose} src="/img/btn_close_off.png" alt="" />
          </div>
        </div>
      </S_ShopSelectModal>
    </>
  );
}

export default ShopSelectModal;
