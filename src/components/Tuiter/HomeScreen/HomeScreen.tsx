import React from 'react'
import { CreateTuitField } from './CreateTuitField';
import { TuitList } from './TuitList';

const HomeScreen = () => {
  return (
    <div>
      <CreateTuitField />
      <TuitList />
    </div>
  )
}

export default HomeScreen;