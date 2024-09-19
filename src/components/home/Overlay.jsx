import { useState } from 'react';
import * as S from '../../styles/home/Overlay.style';

function Overlay({ handleSkip }) {
  const [isVisible, setIsVisible] = useState(true);
  const handleFadeOut = () => {
    // 애니메이션을 시작하기 위해 visible 상태를 false로 변경
    setIsVisible(false);

    // 애니메이션이 끝난 후에 handleSkip을 호출해 컴포넌트를 제거
    setTimeout(() => {
      handleSkip();
    }, 2000); // 1초 후에 컴포넌트를 완전히 제거 (애니메이션 시간과 맞춤)
  };
  return (
    <>
      <S.Overlay className={isVisible ? 'visible' : 'hidden'}>
        <S.BgVideo autoPlay muted loop>
          <source src="/bg.mp4" type="video/mp4" />
        </S.BgVideo>
        <S.OverlayImage src="/logo.png" alt="" />
        <S.SkipBtn onClick={handleFadeOut}>Skip Video</S.SkipBtn>
      </S.Overlay>
    </>
  );
}

export default Overlay;
