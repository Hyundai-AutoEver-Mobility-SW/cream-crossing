import React, { useEffect, useRef } from 'react';
import * as S from '../../styles/home/ScrollToView.style';

function ScrollToView() {
  const boxRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('show');
            }, index * 300); // 각 박스에 200ms씩 지연 시간 추가
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );
    boxRefs.current.forEach(box => {
      if (box) observer.observe(box);
    });
    return () => observer.disconnect();
  }, []);

  // 스크롤 이동 함수
  const handleScrollTo = scrollPosition => {
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <S.GifWrapper>
        <S.GifImage src="/img/scroll.gif" alt="Scroll Animation GIF" />
      </S.GifWrapper>
      <S.GridWrapper>
        <S.BackgroundText>Cream Crossing</S.BackgroundText>
        <S.Row rowCount={1}>
          <S.Box ref={el => (boxRefs.current[0] = el)} onClick={() => handleScrollTo(3300)}>
            <S.Image src="/img/view1.png" alt="Animal 1" top="-10px" right="0" width="75%" />
            <S.Text>
              Just <br /> Dropped
            </S.Text>
          </S.Box>
          <S.Box
            ref={el => (boxRefs.current[1] = el)}
            onClick={() => handleScrollTo(4300)} // 다른 위치로 스크롤
          >
            <S.Image src="/img/view2.png" alt="Animal 1" top="0" width="80%" />
            <S.Text>
              Top <br /> Animal
            </S.Text>
          </S.Box>
          <S.Box ref={el => (boxRefs.current[2] = el)} onClick={() => handleScrollTo(0)}>
            <S.Image src="/img/view3.png" alt="Animal 1" top="10px" width="80%" />
            <S.Text>
              Hot <br /> Deal
            </S.Text>
          </S.Box>
          <S.Box ref={el => (boxRefs.current[3] = el)} onClick={() => handleScrollTo(0)}>
            <S.Image src="/img/view4.png" alt="Animal 1" top="0" width="80%" />
            <S.Text>
              Study <br /> Time
            </S.Text>
          </S.Box>
        </S.Row>
        <S.Row rowCount={2}>
          <S.Box ref={el => (boxRefs.current[4] = el)} onClick={() => handleScrollTo(5000)}>
            <S.Image src="/img/view5.png" alt="Animal 1" top="-10px" width="65%" />
            <S.Text>
              Most <br /> Popular
            </S.Text>
          </S.Box>
          <S.Box ref={el => (boxRefs.current[5] = el)} onClick={() => handleScrollTo(6100)}>
            <S.Image src="/img/view6.png" alt="Animal 1" top="-10px" right="0" width="80%" />
            <S.Text>
              New <br /> In
            </S.Text>
          </S.Box>
          <S.Box ref={el => (boxRefs.current[6] = el)} onClick={() => handleScrollTo(7000)}>
            <S.Image src="/img/view7.png" alt="Animal 1" top="0" width="80%" />
            <S.Text>
              Party <br /> Time
            </S.Text>
          </S.Box>
        </S.Row>
      </S.GridWrapper>
    </>
  );
}

export default ScrollToView;
