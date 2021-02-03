import { useState } from 'react';
import s from './index.module.css';

import Menu from '../Menu';
import Navbar from '../Navbar';

function MenuHeader ({bgActive}) {
  const [isOpen, setOpen] = useState(null);

  const handleClick = () => {
    setOpen(prevState => !prevState);
  };

  return (
    <>
      <Menu isOpen={isOpen}  onClickLink={handleClick}/>
      <Navbar isOpen={isOpen} bgActive={bgActive} onClickHamburg={handleClick}/>
    </>
  )
}

export default MenuHeader;