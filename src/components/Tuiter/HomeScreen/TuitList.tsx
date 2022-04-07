import React, { useEffect } from 'react';
import { findAllTuits } from '../reducers/actions/tuitsActions';
import { useAppDispatch, useAppSelector } from '../store';
import { TuitListItem } from './TuitListItem/TuitListItem';

export const TuitList = () => {
  const tuits: Array<any> = useAppSelector(({ tuits }) => tuits);
  const dispatch = useAppDispatch();

  useEffect(()=>{
    findAllTuits(dispatch)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ul className="ttr-tuits list-group">
      {
         tuits?.map(tuit =>
          <TuitListItem key={tuit._id}
                        tuit={tuit}/>)
      }
    </ul>
  );
}

