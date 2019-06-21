import React from 'react';
import { Link } from 'react-router-dom';

import { getSmurfs } from '../actions/index';
import Smurf from './Smurf';
import { connect } from 'react-redux';

class SmurfList extends React.Component {
    componentDidMount() {
        this.props.getSmurfs();
    }

    render() {
        console.log(this.props.smurfs)
        return (
            <div>
                <div  className='smurf-list'>
                    {this.props.smurfs.map(smurf => {
                        return (
                            <Smurf smurf={smurf} key={smurf.id} />
                        )
                    })}
                </div>
                <button><Link to='/add-smurf'>Add A Smurf!</Link></button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    fetching: state.fetchingSmurf,
    smurfs: state.smurfs
})

export default connect(
    mapStateToProps,
    { getSmurfs }) (SmurfList);