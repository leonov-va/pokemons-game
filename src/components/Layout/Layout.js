import s from './index.module.css';

function Layout ({id, title, descr, urlBg, colorBg = 'green'}) {
  const rootStyle = {
    backgroundColor: colorBg,
    backgroundImage: `url(${urlBg})`
  };

  return (
    <section id={id} className={s.root} style={rootStyle}>
      <div className={s.wrapper}>
        <article>
          <div className={s.title}>
            <h3>{title}</h3>
            <span className={s.separator}></span>
          </div>
          <div className={`${s.desc} ${s.full}`}>
            <p>{descr}</p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Layout;