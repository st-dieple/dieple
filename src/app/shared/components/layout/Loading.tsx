import React from 'react';

type Props = {
  showLoading: boolean
}

export function Loading(prop: Props) {
  const {showLoading} = prop

  return(
    <div className={`loading ${showLoading ? 'show' : 'hide'}`}>
      <div className='image'>
        <img src="../../../assets/images/loading.svg" alt="loading"/>
      </div>
    </div>
  )
}
