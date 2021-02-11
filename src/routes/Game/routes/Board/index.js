import { useContext } from 'react';
import { PokemonContext } from '../../../../context/pokemonContext';
import s from './index.module.css';
import PokemonCard from '../../../../components/PokemonCard';

function BoardPage () {
    const { pokemons } = useContext(PokemonContext);
    
    return (
        <div className={s.root}>
            <div className={s.playerOne}>
                {
                    Object.values(pokemons).map(({id, type, name, values, img}) => (
                        <PokemonCard 
                            className={s.card}
                            key={id}
                            id={id}
                            type={type} 
                            name={name}
                            values={values}
                            img={img}
                            isActive={true}
                            minimize
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