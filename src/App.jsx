import { useState } from 'react';
import Basket from './components/basket/Basket';

function App() {
  return (
    <>
      <div>
        <header className="bg-sky-300 h-[86px] hidden md:block">헤더입니다</header>
        <Basket />
        {/* <footer>ddd</footer> */}
      </div>
    </>
  );
}

export default App;
