import MenuHeader from '../../components/MenuHeader';
import s from './index.module.css';

function  GamePage ({onChangePage}) {
  const handleClick = () => {
    onChangePage && onChangePage('app');
  };

  return (
    <>
      <MenuHeader bgActive={true} />
      <div className={s.gamePage}>
        <h1>Game page</h1>
        <button onClick={handleClick}>&lt; Back to home page</button>
      </div>
    </>
  )
}

export default GamePage;