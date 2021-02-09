import { useState, useEffect, useContext } from 'react';
import { FireBaseContext } from '../../../context/firebaseContext';

import { Link } from 'react-router-dom';

import PokemonCard from '../../../components/PokemonCard';
import {PokemonContext} from '../../../context/pokemonContext';

import s from './index.module.css';

function  GameStart () {
  const [pokemons, setPokemons] = useState([]);
  const firebase = useContext(FireBaseContext);
  const cxt = useContext(PokemonContext);

  useEffect(() => {
    firebase.getPokemonSoket((pokemons) => {
        setPokemons(pokemons);
    });
  }, []);

  const handlePokemonCard = (id) => {
      setPokemons(prevState => (
        Object.entries(prevState).reduce((acc, item) => {
          const pokemon = {...item[1]};

          pokemon.active = true;
          
          if (pokemon.id === id && !pokemon.selected) {
            pokemon.selected = !pokemon.selected;
            cxt.handleAddPokemon(pokemon);
          }
          
          acc[item[0]] = pokemon;
          // firebase.postPokemon(item[0], pokemon);
          return acc;
        }, {})
      ));
  }

  return (
    <>
      <Link to="/game/board" className={s.addNewPokemon}>Start Game</Link>
      <div className={s.flex}>
        {
          Object.entries(pokemons).map(([key, {id, type, name, values, img, active, selected}]) => (
            <PokemonCard
              key={key}
              id={id}
              type={type} 
              name={name}
              values={values}
              img={img}
              isActive={active}
              isSelected={selected}
              onClickPokemonCard={handlePokemonCard}
            />
          ))
        }
      </div>
    </>
  )
}

export default GameStart;