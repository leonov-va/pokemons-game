import cn from 'classnames';
import s from './index.module.css';

function Navbar ({isActive, changeActive}) {
  const handleClick = () => {
    changeActive && changeActive();
  };

  return (
    <nav id={s.navbar}>
      <div className={s.navWrapper}>
        <p className={s.brand}>LOGO</p>
        {/* , {[s.active]: true} */}
        <a 
          className={cn(s.menuButton, {[s.active]: isActive})}
          onClick={handleClick}
        >
          <span></span>
        </a>
      </div>
    </nav>
  )
}

export default Navbar;