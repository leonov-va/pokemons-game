import { useState } from 'react';
import s from './index.module.css';

import Menu from '../Menu';
import Navbar from '../Navbar';

function MenuHeader () {
  const [isActive, setActive] = useState(false);

  const handleActive = () => {
    setActive(!isActive);
  };

  return (
    <>
      <Menu isActive={isActive}/>
      <Navbar isActive={isActive} changeActive={handleActive}/>
    </>
  )
}

export default MenuHeader;