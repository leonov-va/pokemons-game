import {useState} from 'react';
import cn from 'classnames';

import imgBackSide from '../../assets/card-back-side.jpg';

import s from './index.module.css';

function PokemonCard ({id, type, name, values, img}) {
  const [isActive, setActive] = useState(false);

  const onClick = () => {
    setActive(!isActive);
  };

  return (
    <div className={s.root}>
      <div className={cn(s.pokemonCard, {[s.active]: isActive})} onClick={onClick}>
        <div className={s.cardFront}>
          <div className={cn(s.wrap, s.front)}>
            <div className={cn(s.pokemon, s[type])}>
              <div className={s.values}>
                <div className={cn(s.count, s.top)}>{values.top}</div>
                <div className={cn(s.count, s.right)}>{values.right}</div>
                <div className={cn(s.count, s.bottom)}>{values.bottom}</div>
                <div className={cn(s.count, s.left)}>{values.left}</div>
              </div>
              <div className={s.imgContainer}>
                <img src={img} alt={name} />
              </div>
              <div className={s.info}>
                <span className={s.number}>#{id}</span>
                <h3 className={s.name}>{name}</h3>
                <small className={s.type}>
                  Type: 
                  <span>{type}</span></small>
              </div>
            </div>
          </div>
        </div>

        <div className={s.cardBack}>
          <div className={cn(s.wrap, s.back)}>
            <img src={imgBackSide} alt="Сard Backed" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;