import cn from 'classnames';
import s from './index.module.css';

function Navbar ({isOpen, bgActive = false, onClickHamburg}) {
  return (
    <nav className={cn(s.navbar, {[s.bgActive]: bgActive})}>
      <div className={s.navWrapper}>
        <p className={s.brand}>LOGO</p>
        <div
          className={cn(s.menuButton, {[s.active]: isOpen})}
          onClick={onClickHamburg}
        >
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;