import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@app/stores/reducer';

export default function GlobalLoading() {
  const {showLoading} = useSelector((state: RootState) => state.globalLoading);

  return(
    <div className={`loading ${showLoading ? 'show' : 'hide'}`}>
    <div className='image'>
      <img src="../../../assets/images/loading.svg" alt="loading"/>
    </div>
  </div>
  )
}
