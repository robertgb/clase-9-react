import React from 'react'
import StatusBar from '../statusBar/StatusBar';

const Pokemon = (props) => {
const {name, sprites, stats, types, weight} = props;

  return (
    <div>
        <div>
            <div><div></div></div>
            <img src={sprites.front_default} alt={name}/>
        </div>
        <div>
            <h2>{name}</h2>
            <h3>{types[0].type.name}</h3>
        </div>
        <div>
            {stats?.map(stat => ( 
                <StatusBar key={stat.stat.name} {...stat}/>
            ))}
        </div>
    </div>
  )
}

export default Pokemon