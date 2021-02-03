import { useState } from 'react';
import s from './index.module.css';

import Menu from '../Menu';
import Navbar from '../Navbar';

function MenuHeader ({bgActive}) {
  const [isOpen, setOpen] = useState(null);

  const handleClickHamburg = () => {
    setOpen(prevState => !prevState);
  };

  return (
    <>
      <Menu isOpen={isOpen}/>
      <Navbar isOpen={isOpen} bgActive={bgActive} onClickHamburg={handleClickHamburg}/>
    </>
  )
}

export default MenuHeader;