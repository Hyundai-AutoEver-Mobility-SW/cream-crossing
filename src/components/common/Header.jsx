import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../assets/style.css';

const Header = () => {
  return (
    <header>
      {/* 첫 번째 섹션: 사용자 옵션 */}
      <div className="top-user-options">
        <nav className="user-options">
          <NavLink to="#service">고객센터</NavLink>
          <NavLink to="#mypage">마이페이지</NavLink>
          <NavLink to="#wishlist">관심</NavLink>
          <NavLink to="#notifications">알림</NavLink>
          <NavLink to="#login">로그인</NavLink>
        </nav>
      </div>

      {/* 두 번째 섹션: 로고 및 메인 네비게이션 */}
      <div className="main-nav">
        <div className="logo-section">
          <NavLink to="/" className="logo-text">
            HDSHOP
          </NavLink>
        </div>
        <div className="nav-section">
          <nav className="main-menu">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'main-link active' : 'main-link')}>
              HOME
            </NavLink>
            <NavLink to="/style" className={({ isActive }) => (isActive ? 'main-link active' : 'main-link')}>
              STYLE
            </NavLink>
            <NavLink to="/shop" className={({ isActive }) => (isActive ? 'main-link active' : 'main-link')}>
              SHOP
            </NavLink>
            <NavLink to="/search" className="icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11 2a9 9 0 105.297 16.32l4.387 4.387a.75.75 0 101.06-1.06l-4.387-4.387A9 9 0 0011 2zM3.5 11a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z"
                  fill="#222"
                />
              </svg>
            </NavLink>
            <NavLink to="/cart" className="icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.192 5.2h3.267a1 1 0 01.998.938l.916 14.837a.4.4 0 01-.399.425H3.025a.4.4 0 01-.4-.425l.917-14.837A1 1 0 014.54 5.2h3.267a4.251 4.251 0 018.385 0zM7.75 6.7H5.01l-.815 13.2h15.61l-.816-13.2h-2.74v2.7h-1.5V6.7h-5.5v2.7h-1.5V6.7zm1.59-1.5h5.32a2.751 2.751 0 00-5.32 0z"
                  fill="#222"></path>
              </svg>
            </NavLink>
          </nav>
        </div>
      </div>

      {/* 세 번째 섹션: 하단 네비게이션 메뉴 */}
      <div className="bottom-nav">
        <nav className="nav-menu">
          <ul className="nav-list">
            <li>
              <NavLink to="/sale" className={({ isActive }) => (isActive ? 'sale active' : 'sale')}>
                추석슈퍼세일
              </NavLink>
            </li>
            <li>
              <NavLink to="/recommend" className={({ isActive }) => (isActive ? 'active' : '')}>
                추천
              </NavLink>
            </li>
            <li>
              <NavLink to="/ranking">
                랭킹<span className="dot"></span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/luxury">럭셔리</NavLink>
            </li>
            <li>
              <NavLink to="/men">남성</NavLink>
            </li>
            <li>
              <NavLink to="/women">여성</NavLink>
            </li>
            <li>
              <NavLink to="/discover">발견</NavLink>
            </li>
            <li>
              <NavLink to="/events">이벤트</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
