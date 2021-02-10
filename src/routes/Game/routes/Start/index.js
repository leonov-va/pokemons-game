import { useState, useEffect, useContext } from 'react';
import { FireBaseContext } from '../../../../context/firebaseContext';

import { Link } from 'react-router-dom';

import PokemonCard from '../../../../components/PokemonCard';
import {PokemonContext} from '../../../../context/pokemonContext';

import s from './index.module.css';

function  StartPage () {
  const [pokemons, setPokemons] = useState([]);
  const firebase = useContext(FireBaseContext);
  const cxt = useContext(PokemonContext);

  useEffect(() => {
    firebase.getPokemonSoket((pokemons) => {
        setPokemons(pokemons);
    });

    return () => firebase.offPokemonSoket();
  }, []);

  const handleChangeSelected = (key) => {
      setPokemons(prevState => ({
        ...prevState,
        [key]: {
          ...prevState[key],
          selected: !prevState[key].selected,
        }
      }))
  }

  return (
    <>
      <button>Start Game</button>
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
              onClickCard={() => handleChangeSelected(key)}
            />
          ))
        }
      </div>
    </>
  )
}

export default StartPage;