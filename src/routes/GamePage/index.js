import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import PokemonCard from '../../components/PokemonCard';

import {database, fire} from '../../service/firebase';

import s from './index.module.css';

function  GamePage () {
  const history = useHistory();
  const [pokemons, setPokemons] = useState([]);

  useEffect(getPokemonCards, []);
  
  function getPokemonCards() {
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

          database.ref(`pokemons/${key}`).set({
            ...pokemon,
            active: pokemon.active
          });
        }
    
        acc[key] = pokemon;
        return acc;
      }, {})
    ));
  }

  const addPokemon = () => {
    const newKey = fire.database().ref().child('pokemons').push().key;
    const data = {
      abilities : [ "keen-eye", "tangled-feet", "big-pecks" ],
      base_experience : 122,
      height : 11,
      id : newKey,
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

    fire.database().ref('pokemons/' + newKey).set(data);
    getPokemonCards();
  };

  return (
    <>
      <div>
        {/* <button onClick={handleClick}>&lt; Back to home page</button> */}
        <button 
          className={s.addNewPokemon}  
          onClick={addPokemon}
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