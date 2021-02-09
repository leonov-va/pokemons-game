import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import PokemonCard from '../../components/PokemonCard';

import {database} from '../../service/firebase';

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

function  GamePage () {
  const history = useHistory();
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);
  
  function getPokemons() {
    database.ref('pokemons').once('value', (snapshot) => {
      setPokemons(snapshot.val());
    });
  }

  const handleClick = () => {
    history.push('/');
  };

  const handlePokemonCard = (id) => {
    // setPokemons(pokemons => (pokemons.map(pokemon => pokemon.id === id ? ({...pokemon, active: !pokemon.active}) : pokemon)))

    setPokemons(prevState => (
      Object.entries(prevState).reduce((acc, item) => {
        const pokemon = {...item[1]};
        const key = item[0];
        
        if (pokemon.id === id) {
          pokemon.active = !pokemon.active;
        }
    
        acc[key] = pokemon;

        database.ref(`pokemons/${key}`).set(pokemon);

        return acc;
      }, {})
    ));
  }

  const handleAddPokemon = () => {
    const data = DATA;
    const newKey = database.ref().child('pokemons').push().key;
    database.ref('pokemons/' + newKey).set(data).then(() => getPokemons());
  };

  return (
    <>
      <div>
        {/* <button onClick={handleClick}>&lt; Back to home page</button> */}
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

export default GamePage;