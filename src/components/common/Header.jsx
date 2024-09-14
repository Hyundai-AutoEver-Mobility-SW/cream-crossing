import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full bg-white font-sans">
      {/* 첫 번째 섹션: 사용자 옵션 */}
      <div className="flex justify-end py-2 px-8">
        <nav className="flex space-x-3 text-gray-600 text-xs">
          <NavLink to="#service">고객센터</NavLink>
          <NavLink to="#mypage">마이페이지</NavLink>
          <NavLink to="#wishlist">관심</NavLink>
          <NavLink to="#notifications">알림</NavLink>
          <NavLink to="#login">로그인</NavLink>
        </nav>
      </div>

      {/* 두 번째 섹션: 로고 및 메인 네비게이션 */}
      <div className="flex justify-between items-center py-3 px-8">
        <div className="flex-grow-0">
          <NavLink to="/" className="text-2xl font-black italic text-black no-underline">
            HDSHOP
          </NavLink>
        </div>
        <div className="flex-grow flex justify-end items-center">
          <nav className="flex space-x-6 text-lg">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'hidden md:flex font-bold text-black'
                  : 'hidden md:flex text-black no-underline'
              }
            >
              HOME
            </NavLink>
            <NavLink
              to="/style"
              className={({ isActive }) =>
                isActive
                  ? 'hidden md:flex font-bold text-black'
                  : 'hidden md:flex text-black no-underline'
              }
            >
              STYLE
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive
                  ? 'hidden md:flex font-bold text-black'
                  : 'hidden md:flex text-black no-underline'
              }
            >
              SHOP
            </NavLink>
            <NavLink to="/search" className="inline-block relative top-1">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11 2a9 9 0 105.297 16.32l4.387 4.387a.75.75 0 101.06-1.06l-4.387-4.387A9 9 0 0011 2zM3.5 11a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z"
                  fill="#222"
                />
              </svg>
            </NavLink>
            <NavLink to="/cart" className="inline-block relative top-1">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.192 5.2h3.267a1 1 0 01.998.938l.916 14.837a.4.4 0 01-.399.425H3.025a.4.4 0 01-.4-.425l.917-14.837A1 1 0 014.54 5.2h3.267a4.251 4.251 0 018.385 0zM7.75 6.7H5.01l-.815 13.2h15.61l-.816-13.2h-2.74v2.7h-1.5V6.7h-5.5v2.7h-1.5V6.7zm1.59-1.5h5.32a2.751 2.751 0 00-5.32 0z"
                  fill="#222"
                />
              </svg>
            </NavLink>
          </nav>
        </div>
      </div>

      {/* 세 번째 섹션: 하단 네비게이션 메뉴 */}
      <div className="flex justify-start py-2 pl-8 overflow-hidden">
        <nav className="flex flex-nowrap">
          <ul className="flex gap-4 mb-1 list-none pl-0 text-sm whitespace-nowrap">
            <li>
              <NavLink
                to="/sale"
                className={({ isActive }) =>
                  isActive
                    ? 'text-red-600 font-bold border-b-2 border-red-600 pb-2'
                    : 'text-red-600 border-b-2 border-transparent pb-2'
                }
              >
                추석슈퍼세일
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/recommend"
                className={({ isActive }) =>
                  isActive ? 'font-bold border-b-2 border-black pb-2' : 'border-b-2 border-transparent pb-2'
                }
              >
                추천
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ranking"
                className={({ isActive }) =>
                  isActive ? 'font-bold border-b-2 border-black pb-2' : 'border-b-2 border-transparent pb-2'
                }
              >
                랭킹
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/luxury"
                className={({ isActive }) =>
                  isActive ? 'font-bold border-b-2 border-black pb-2' : 'border-b-2 border-transparent pb-2'
                }
              >
                럭셔리
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/men"
                className={({ isActive }) =>
                  isActive ? 'font-bold border-b-2 border-black pb-2' : 'border-b-2 border-transparent pb-2'
                }
              >
                남성
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/women"
                className={({ isActive }) =>
                  isActive ? 'font-bold border-b-2 border-black pb-2' : 'border-b-2 border-transparent pb-2'
                }
              >
                여성
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/discover"
                className={({ isActive }) =>
                  isActive ? 'font-bold border-b-2 border-black pb-2' : 'border-b-2 border-transparent pb-2'
                }
              >
                발견
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  isActive ? 'font-bold border-b-2 border-black pb-2' : 'border-b-2 border-transparent pb-2'
                }
              >
                이벤트
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
