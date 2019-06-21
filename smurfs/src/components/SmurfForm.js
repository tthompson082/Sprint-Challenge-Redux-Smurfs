import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions/index';

class SmurfForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            height: ''
        };
    }

    addSmurf = e => {
        e.preventDefault();
        this.props.addSmurf(this.state)
        this.setState({
            name: '',
            age: '',
            height: ''
        });
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className='smurf-form'>
                <form onSubmit={this.addSmurf}>
                    <input type='text' name='name' placeholder='Name' value={this.state.name} onChange={this.handleChanges} />
                    <input type='text' name='age' placeholder='Age' value={this.state.age} onChange={this.handleChanges} />
                    <input type='text' name='height' placeholder='Height' value={this.state.height} onChange={this.handleChanges} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    error: state.error
})

export default connect(
    mapStateToProps,
    { addSmurf })(SmurfForm)