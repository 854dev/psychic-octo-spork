import React from 'react'

function Button() {
  return (
      <>
        <div className='cursor-pointer active:bg-purple-900 bg-purple-700 w-40 h-8 rounded-lg text-white flex justify-center py-1 m-8'><div>전체</div></div>
        <div className='cursor-pointer active:bg-gray-400 bg-white w-40 h-8 rounded-lg text-gray-600 border  border-gray-500 flex justify-center py-1 m-8'><div>전체</div></div>
      </>
  )
}

export default Button