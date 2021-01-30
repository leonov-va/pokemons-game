import s from './index.module.css';

function Layout ({id, title, urlBg, colorBg, children}) {
  const rootStyle = {};

  if (colorBg) rootStyle.backgroundColor = colorBg;
  if (urlBg) rootStyle.backgroundImage = `url(${urlBg})`;

  return (
    <section id={id} className={s.root} style={rootStyle}>
      <div className={s.wrapper}>
        <article>
          <div className={s.title}>
            <h3>{title}</h3>
            <span className={s.separator}></span>
          </div>
          <div className={`${s.desc} ${s.full}`}>
            {children}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Layout;