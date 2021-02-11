import { useLocation,useRouteMatch, Route, Switch, Redirect } from 'react-router-dom';
import cn from 'classnames';

import HomePage from './routes/HomePage';
import Game from './routes/Game';
import AboutPage from './routes/AboutPage';
import ContactPage from './routes/ContactPage';
import NotFound from './routes/NotFound';
import MenuHeader from './components/MenuHeader';
import Footer from './components/Footer';

import Firebase from './service/firebase';
import { FireBaseContext } from './context/firebaseContext';

import s from './style.module.css';

function App () {
  const location = useLocation();
  const isPadding = location.pathname === '/' || location.pathname === '/game/board';

  return (
    <FireBaseContext.Provider value={new Firebase()}>
      <Switch>
        <Route path="/404" component={NotFound} />
        <Route>
          <>
            <MenuHeader bgActive={!isPadding} />
            <div className={cn(s.wrap, {
              [s.isHomePage]: isPadding
            })}>
              <Switch>
                <Route path="/" component={HomePage} exact />
                {/* <Route path="/home" component={HomePage} /> */}
                <Route path="/game" component={Game} />
                <Route path="/about" component={AboutPage} />
                <Route path="/contact" component={ContactPage} />
                <Route render={() => (
                  <Redirect to="/404"/>
                )} />
              </Switch>
            </div>
            <Footer />
          </>
        </Route>
      </Switch>
    </FireBaseContext.Provider>
  )
}

export default App;