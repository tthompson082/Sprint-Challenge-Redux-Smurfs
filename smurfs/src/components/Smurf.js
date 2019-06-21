import React from 'react';

const Smurf = props => {
    return (
        <div className='smurf'>
            <h2>{props.smurf.name}</h2>
            <h3>{props.smurf.age} smurf years old</h3>
            <h3>{props.smurf.height} tall</h3>
        </div>
    )
}

export default Smurf;