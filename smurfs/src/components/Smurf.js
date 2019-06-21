import React from 'react';
import { Link } from 'react-router-dom';

const Smurf = props => {
    return (
        <div className='smurf'>
            <h2>{props.smurf.name}</h2>
            <h3>{props.smurf.age} smurf years old</h3>
            <h3>{props.smurf.height} tall</h3>
            <button><Link to={`/smurf/${props.smurf.id}`}>Update</Link></button>
        </div>
    )
}

export default Smurf;