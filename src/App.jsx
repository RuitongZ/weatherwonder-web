// import React from 'react';

import Header from './components/Header';
import Temperature from './components/Temperature';
import bgImg from './assets/Background-img.jpg';

function App() {
  return (
    <>
      <div className='flex justify-center align-center'>
        <div
          style={{
            background: `url("${bgImg}")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: 1040,
            height: 603,
          }}
        >
          <Header />
          <Temperature />
        </div>
      </div>
    </>
  );
}

export default App;
