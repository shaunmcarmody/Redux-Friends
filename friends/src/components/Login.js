import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit = e => {
        e.preventDefault();
        this.setState({ username: '', password: '' });
        this.props.login(this.state)
            .then(res => this.props.history.push('/friends-list'));
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <input
                    name="username"
                    onChange={this.handleChange}
                    placeholder="username"
                    value={this.state.username}
                />
                <input
                    name="password"
                    onChange={this.handleChange}
                    placeholder="password"
                    value={this.state.password}
                />
                <button>Login</button>
            </form>
        )
    }
}

export default connect(null, { login })(Form);