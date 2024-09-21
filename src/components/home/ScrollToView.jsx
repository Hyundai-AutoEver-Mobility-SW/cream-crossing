import React, { useEffect, useRef } from 'react';
import * as S from '../../styles/home/ScrollToView.style'; // styled-components import

function ScrollToView() {
  const boxRefs = useRef([]); // 각 박스에 대한 ref 배열 생성

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('show');
            }, index * 300); // 각 박스에 200ms씩 지연 시간 추가
            // observer.unobserve(entry.target);
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

  return (
    <>
      <S.GifWrapper>
        <S.GifImage src="/img/scroll.gif" alt="Scroll Animation GIF" />
      </S.GifWrapper>
      <S.GridWrapper>
        <S.BackgroundText>Cream Crossing</S.BackgroundText>
        <S.Row rowCount={1}>
          <S.Box ref={el => (boxRefs.current[0] = el)}>
            <S.Image src="/img/view1.png" alt="Animal 1" top="-10px" right="0" width="75%" />
            <S.Text>
              Just <br /> Dropped
            </S.Text>
          </S.Box>
          <S.Box ref={el => (boxRefs.current[1] = el)}>
            <S.Image src="/img/view2.png" alt="Animal 1" top="0" width="80%" />
            <S.Text>
              Top <br /> Animal
            </S.Text>
          </S.Box>
          <S.Box ref={el => (boxRefs.current[2] = el)}>
            <S.Image src="/img/view3.png" alt="Animal 1" top="10px" width="80%" />
            <S.Text>
              Hot <br /> Deal
            </S.Text>
          </S.Box>
          <S.Box ref={el => (boxRefs.current[3] = el)}>
            <S.Image src="/img/view4.png" alt="Animal 1" top="0" width="80%" />
            <S.Text>
              Study <br /> Time
            </S.Text>
          </S.Box>
        </S.Row>
        <S.Row rowCount={2}>
          <S.Box ref={el => (boxRefs.current[4] = el)}>
            <S.Image src="/img/view5.png" alt="Animal 1" top="-10px" width="65%" />
            <S.Text>
              Most <br /> Popular
            </S.Text>
          </S.Box>
          <S.Box ref={el => (boxRefs.current[5] = el)}>
            <S.Image src="/img/view6.png" alt="Animal 1" top="-10px" right="0" width="80%" />
            <S.Text>
              New <br /> In
            </S.Text>
          </S.Box>
          <S.Box ref={el => (boxRefs.current[6] = el)}>
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
