import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mb-3 border-b border-gray-300 pb-6 text-[11px]">
        <div className="space-y-2">
          <h4 className="text-[11px] font-semibold">이용안내</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/inspection-standards" className="text-gray-700 hover:underline">
                검수기준
              </Link>
            </li>
            <li>
              <Link to="/policy" className="text-gray-700 hover:underline">
                이용정책
              </Link>
            </li>
            <li>
              <Link to="/penalty-policy" className="text-gray-700 hover:underline">
                페널티 정책
              </Link>
            </li>
            <li>
              <Link to="/community-guideline" className="text-gray-700 hover:underline">
                커뮤니티 가이드라인
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="text-[11px] font-semibold">고객지원</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/announcements" className="text-gray-700 hover:underline">
                공지사항
              </Link>
            </li>
            <li>
              <Link to="/service-intro" className="text-gray-700 hover:underline">
                서비스 소개
              </Link>
            </li>
            <li>
              <Link to="/store-info" className="text-gray-700 hover:underline">
                스토어 안내
              </Link>
            </li>
            <li>
              <Link to="/seller-visit" className="text-gray-700 hover:underline">
                판매자 방문접수
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] font-semibold">고객센터 1588-7777</h4>
          <p className="text-gray-700 mb-3 text-[10px]">
            운영시간 평일 10:00 - 18:00 (토.일, 공휴일 휴무)
            <br />
            점심시간 평일 13:00 - 14:00
          </p>
          <p className="text-gray-700 text-[10px]">1:1 문의하기는 앱에서만 가능합니다.</p>
          <Link to="/faq">
            <button className="bg-black text-white px-4 py-2 mt-3 rounded hover:bg-gray-800 transition text-[10px]">
              자주 묻는 질문
            </button>
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-6 border-b border-gray-300 text-[10px]">
        <div className="flex flex-col md:flex-row justify-between text-[10px] text-gray-500 space-y-4 md:space-y-0">
          <div>회사소개 | 인재채용 | 제휴제안 | 이용약관 | 개인정보처리방침</div>
        </div>

        <div className="mt-3 text-gray-500 text-[10px] md:text-left">
          HDSHOP 주식회사 · 대표 김홍빈 사업자등록번호 : 111-22-33345 통신판매업 : 제 2021-성남분당C-0093호
          <br />
          사업장소재지 : 서울 금천구 가산디지털1로 189 (주)LG 가산 디지털센터
          <br />
          호스팅 서비스 : 네이버 클라우드 (주)
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-6 text-[10px] text-gray-500">
        <p className="mb-1 font-bold">신한은행 채무지급보증 안내</p>
        <p className="mb-3">
          당사는 고객님의 현금 결제 금액에 대해 신한은행과 채무지급보증 계약을 체결하여 안전거래를 보장하고 있습니다.{' '}
          <a href="#" className="text-blue-500 hover:underline">
            서비스가입 사실 확인
          </a>
        </p>
        <p>
          HDSHOP(주)는 통신판매 중개자로서 통신판매의 당사자가 아닙니다. 본 상품은 개별판매자가 등록한 상품으로 상품,
          상품정보, 거래에 관한 의무와 책임은 각 판매자에게 있습니다. 단, 이용약관 및 정책, 기타 거래 체결 과정에서
          고지하는 내용 등에 따라 검수하고 보증하는 내용에 대한 책임은 HDSHOP(주)에 있습니다.
        </p>
      </div>
      <div className="text-center text-gray-500 text-[10px] py-4">© HDSHOP Corp.</div>
    </footer>
  );
};

export default Footer;
