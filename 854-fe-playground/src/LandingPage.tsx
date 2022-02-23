import Header from './Header'
import React from 'react'
import wing_chun from './wing_chun.png'
import TopNav from 'TopNav'
import Button from 'components/Button'

function LandingPage() {
  return (
      <>
        <Header/>
        <TopNav/>
        <Button/>
          {/* <div className='flex justify-center'>
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
          </div> */}
    </>
  )
}

export default LandingPage