import React from 'react';
import { useAppSelector } from '../store';
import { TuitListItem } from './TuitListItem/TuitListItem';

export const TuitList = () => {
  const tuits = useAppSelector(({ tuits }) => tuits);
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

