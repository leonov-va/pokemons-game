import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import PokemonCard from '../../components/PokemonCard';

import database from '../../service/firebase';

import s from './index.module.css';

function  GamePage () {
  const history = useHistory();
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    database.ref('pokemons').once('value', (snapshot) => {
      setPokemons(Object.values(snapshot.val()));
    });
  }, []);

  const handleClick = () => {
    history.push('/');
  };

  const handlePokemonCard = (id) => {
    // setPokemons(pokemons => (pokemons.map(pokemon => pokemon.id === id ? ({...pokemon, active: !pokemon.active}) : pokemon)))

    setPokemons(prevState => (
      Object.entries(pokemons).reduce((acc, item) => {
        const pokemon = {...item[1]};
        const key = item[0];
        
        if (pokemon.id === id) {
          pokemon.active = !pokemon.active;
        }
    
        acc[key] = pokemon;
        return acc;
      }, [])
    ));
  }
  
  return (
    <>
      <div>
        <h1>Game page</h1>
        <button onClick={handleClick}>&lt; Back to home page</button>
        <div className={s.flex}>
          {
            pokemons.map(({id, type, name, values, img, active}) => (
              <PokemonCard
                key={id}
                id={id}
                type={type} 
                name={name}
                values={values}
                img={img}
                isActive={active}
                onClickPokemonCard={handlePokemonCard}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default GamePage;