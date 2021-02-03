import { useState } from 'react';

import HomePage from './routes/HomePage';
import GamePage from './routes/GamePage';

function App () {
  const [page, setPage] = useState('app');

  const handleChangePage = (page) => {
    // console.log('Main page!');
    setPage(page);
  };

  switch (page) {
    case 'app':
      return <HomePage onChangePage={handleChangePage} />
    case 'game':
      return <GamePage  onChangePage={handleChangePage} />
    default:
      return <HomePage />
  }
}

export default App;