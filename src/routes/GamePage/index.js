import s from './index.module.css';

function  GamePage ({onChangePage}) {
  const handleClick = () => {
    // console.log('Game page!');
    onChangePage && onChangePage();
  };

  return (
    <>
      <button onClick={handleClick}>&lt; Back to home page</button>
      <h1>Game page</h1>
    </>
  )
}

export default GamePage;