import cn from 'classnames';
import s from './index.module.css';

function Menu ({isActive}) {
  return (
    <div className={cn(s.menuContainer, {[s.active]: isActive}, s.deactive)}>
      <div className={s.overlay} />
      <div className={s.menuItems}>
        <ul>
          <li>
            <a href="#welcome">HOME</a>
          </li>
          <li>
            <a href="#game">GAME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Menu;