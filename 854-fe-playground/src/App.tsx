import React from 'react';
import wing_chun from './wing_chun.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='container mx-auto'> 
          <h1 className='p-4 text-4xl font-bold text-center'>
            ★프론트엔드 수련장★
          </h1>
          <div className='flex justify-center'>
            <img className='w-full px-[24%]' src={wing_chun} alt="영춘권" />
          </div>
          <div className="w-full text-2xl text-center text-blue-700">
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            워씽 리액트 배워라 쉬먀
          </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
