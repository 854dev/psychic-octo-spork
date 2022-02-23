import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import DragPage from 'DragPage';
import LandingPage from 'LandingPage';

function App() {
  return (

    <div className="App bg-white">
          {/* <header className='p-4 text-4xl font-bold text-center'>
            ★프론트엔드 수련장★
          </header> */}

          
          <div className='container mx-auto'> 
            <BrowserRouter>
            {/* <h1 className='p-4 text-4xl font-bold text-center'>
              react-router-dom v6다 쉬먀
            </h1>
            <div className='flex flex-row p-3 justify-evenly'>
              <Link to="/"><div className='p-6 rounded-md outline outline-offset-2 outline-4 outline-blue-500 active:bg-slate-400'>랜딩페이지</div></Link>
              <Link to="/drag"><div className='p-6 rounded-md outline outline-offset-2 outline-4 outline-blue-500 active:bg-slate-400'>드래그테스트</div></Link>
            </div> */}

              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/drag" element={<DragPage />} />
              </Routes>
            </BrowserRouter>
          </div>

      </div>

  );
}

export default App;
