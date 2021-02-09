import {useContext} from 'react';
import {PokemonContext} from '../../../context/pokemonContext';
import PokemonCard from '../../../components/PokemonCard';
import s from './index.module.css';

function BoardPage () {
    const cxt = useContext(PokemonContext);
    const pokemons = cxt.pokemon;

    return (
        <div className={s.root}>
            <div className={s.playerOne}>
                {
                    pokemons.map(({id, type, name, values, img}) => (
                        <PokemonCard
                            key={id}
                            id={id}
                            type={type} 
                            name={name}
                            values={values}
                            img={img}
                        />
                    ))
                }
            </div>
            <div className={s.board}>
                <div className={s.boardPlate}>1</div>
                <div className={s.boardPlate}>2</div>
                <div className={s.boardPlate}>3</div>
                <div className={s.boardPlate}>4</div>
                <div className={s.boardPlate}>5</div>
                <div className={s.boardPlate}>6</div>
                <div className={s.boardPlate}>7</div>
                <div className={s.boardPlate}>8</div>
                <div className={s.boardPlate}>9</div>
            </div>
        </div>
    );
};

export default BoardPage;