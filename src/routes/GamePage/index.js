import { useHistory } from 'react-router-dom';
import s from './index.module.css';

function  GamePage () {
  const history = useHistory();

  const handleClick = () => {
    history.push('/')
  };

  return (
    <>
      <div>
        <h1>Game page</h1>
        <button onClick={handleClick}>&lt; Back to home page</button>
      </div>
    </>
  )
}

export default GamePage;