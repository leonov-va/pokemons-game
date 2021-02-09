import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { FireBaseContext } from '../../../context/firebaseContext';

import PokemonCard from '../../../components/PokemonCard';

import s from './index.module.css';

const DATA = {
  abilities : [ "keen-eye", "tangled-feet", "big-pecks" ],
  base_experience : 122,
  height : 11,
  id : 491,
  img : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
  name : "pidgeotto",
  stats : {
    attack : 60,
    defense : 55,
    hp : 63,
    'special-attack' : 50,
    'special-defense' : 50,
    speed : 71
  },
  type : "flying",
  values : {
    bottom : 7,
    left : 5,
    right : 2,
    top : 'A'
  }
};

function  GameStart () {
  const firebase = useContext(FireBaseContext);
  const history = useHistory();
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    // getPokemons();
    firebase.getPokemonSoket((pokemons) => {
      setPokemons(pokemons);
    });
  }, []);
  
  const handleClick = () => {
    history.push('/');
  };

  const handlePokemonCard = (id) => {
    setPokemons(prevState => (
      Object.entries(prevState).reduce((acc, item) => {
        const pokemon = {...item[1]};
        const key = item[0];
        
        if (pokemon.id === id) {
          pokemon.active = !pokemon.active;
        }
    
        acc[key] = pokemon;

        firebase.postPokemon(key, pokemon);

        return acc;
      }, {})
    ));
  }

  const handleAddPokemon = () => {
    const data = DATA;
    firebase.addPokemon(data);
  };

  return (
    <>
      <div>
        <button 
          className={s.addNewPokemon}  
          onClick={handleAddPokemon}
        >Add new pokemon</button>
        <div className={s.flex}>
          {
            Object.entries(pokemons).map(([key, {id, type, name, values, img, active}]) => (
              <PokemonCard
                key={key}
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

export default GameStart;