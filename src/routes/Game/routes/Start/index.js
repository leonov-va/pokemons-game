import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FireBaseContext } from '../../../../context/firebaseContext';

import PokemonCard from '../../../../components/PokemonCard';
import {PokemonContext} from '../../../../context/pokemonContext';

import s from './index.module.css';

function  StartPage () {
  const [pokemons, setPokemons] = useState([]);
  const firebase = useContext(FireBaseContext);
  const pokemonContext = useContext(PokemonContext);
  const history = useHistory();

  useEffect(() => {
    firebase.getPokemonSoket((pokemons) => {
        setPokemons(pokemons);
    });

    return () => firebase.offPokemonSoket();
  }, []);

  const handleChangeSelected = (key) => {
    const pokemon = {...pokemons[key]};
    pokemonContext.onSelectedPokemons(key, pokemon);

    setPokemons(prevState => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        selected: !prevState[key].selected,
      }
    }))
  }

  const handleStartGameClick = () => {
    history.push('/game/board');
  }

  return (
    <>
      <button 
        onClick={handleStartGameClick}
        disabled={Object.keys(pokemonContext.pokemons).length < 5}
      >
        Start Game
      </button>
      <div className={s.flex}>
        {
          Object.entries(pokemons).map(([key, {id, type, name, values, img, selected}]) => (
            <PokemonCard
              className={s.card}
              key={key}
              id={id}
              type={type} 
              name={name}
              values={values}
              img={img}
              isActive={true}
              isSelected={selected}
              onClickCard={() => {
                if (Object.keys(pokemonContext.pokemons).length < 5 || selected){
                  handleChangeSelected(key);
                }
              }}
            />
          ))
        }
      </div>
    </>
  )
}

export default StartPage;