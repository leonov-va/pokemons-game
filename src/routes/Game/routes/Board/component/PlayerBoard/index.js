import { useState } from 'react';
import cn from 'classnames';
import PokemonCard from '../../../../../../components/PokemonCard';
import s from './index.module.css';

const PlayerBoard = ({player, cards, onClickCard}) => {
  const [isSelected, setIsSelected] = useState(null);

  return (
    <>
      {
        cards.map((item) => (
            <div
              key={item.id} 
              className={cn(s.cardBoard, {
                [s.selected]: isSelected === item.id
              })}
              onClick={() => {
                setIsSelected(item.id);
                onClickCard && onClickCard({
                  player,
                  ...item
                });
              }}  
            >
              <PokemonCard 
                  key={item.id}
                  id={item.id}
                  type={item.type} 
                  name={item.name}
                  values={item.values}
                  img={item.img}
                  isActive
                  minimize
              />
            </div>
        ))
      }
    </>
  )
};

export default PlayerBoard;