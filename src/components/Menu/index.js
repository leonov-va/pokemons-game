import cn from 'classnames';
import s from './index.module.css';

function Menu ({isActive}) {
  const menu = [
    {title: 'HOME', url: '#welcome'},
    {title: 'GAME', url: '#game'},
    {title: 'ABOUT', url: '#about'},
    {title: 'CONTACT', url: '#contact'},
  ];

  return (
    <div className={cn(s.menuContainer, {[s.active]: isActive, [s.deactive]: !isActive})}>
      <div className={s.overlay} />
      <div className={s.menuItems}>
        <ul>
          {
            menu.map(item => (
              <li>
                <a href={item.url}>{item.title}</a>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Menu;