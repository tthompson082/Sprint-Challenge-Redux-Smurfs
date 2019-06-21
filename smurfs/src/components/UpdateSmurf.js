import React from 'react';
import { getSpecificSmurf, deleteSmurf } from '../actions/index';
import { connect } from 'react-redux';

class UpdateSmurf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            smurf: this.props.specificSmurf
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getSpecificSmurf(id);
    }

    handleInputChange = e => {
        this.setState({
            smurf: {
                ...this.state.smurf,
                [e.target.name]: e.target.value 
            }
        });
    };

    deleteSmurf = e => {
        e.preventDefault();
        this.props.deleteSmurf(this.state.smurf);
        this.props.history.push('/')
    }

    render() {
        return (
            <div className='smurf-form'>
            <form>
                <input type='text' name='name' placeholder='Name' value={this.state.smurf.name} onChange={this.handleInputChanges} />
                <input type='text' name='age' placeholder='Age' value={this.state.smurf.age} onChange={this.handleInputChanges} />
                <input type='text' name='height' placeholder='Height' value={this.state.smurf.height} onChange={this.handleInputChanges} />
                <button>Submit</button>
            </form>
            <button onClick={this.deleteSmurf}>Delete</button>
        </div>
        )
    }
}

const mapStateToProps = state => ({
    error: state.error,
    specificSmurf: state.specificSmurf
})

export default connect(
    mapStateToProps,
    { getSpecificSmurf, deleteSmurf })(UpdateSmurf)