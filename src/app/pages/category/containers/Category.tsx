import React from 'react';
import { useDispatch } from 'react-redux';
import { getListCategories } from '../category.actions';

export default function Category() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getListCategories());
  }, []);
  
  return(
    <></>
  )
}
