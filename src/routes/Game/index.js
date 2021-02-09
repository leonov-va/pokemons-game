import {Switch, Route, useRouteMatch} from 'react-router-dom';
import { useState, useContext } from 'react';

import { PokemonContext } from '../../context/pokemonContext';

import StartPage from './Start';
import BoardPage from './Board';
import FinishPage from './Finish';

const GamePage = () => {
    const [pokemon, setPokemon] = useState([]);
    const match = useRouteMatch();
    
    const handleAddPokemon = (value) => {
        setPokemon(prevState => ([
            ...prevState,
            value
        ]));
    }
    
    return (
        <PokemonContext.Provider value={{
            pokemon,
            handleAddPokemon,
        }}>
            <Switch>
                <Route path={`${match.path}/`} exact component={StartPage} />
                <Route path={`${match.path}/board`} component={BoardPage} />
                <Route path={`${match.path}/finish`} component={FinishPage} />
            </Switch>
        </PokemonContext.Provider>
    );
};

export default GamePage;