import React from 'react';
import './header.css';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';


class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }

        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(e) {
        e.preventDefault();

        console.log("attempting to login!")
    }

    render() {
        return (
            <div className="header">
                <div className="trippie">
                    <h1>trippie</h1>
                </div>
                <div className="space"></div>
                <div className="login">
                    <form onSubmit={this.handleLogin}>
                        <div className="block-1">
                            <label className="input">Email:</label>
                            <input type="text" className="input" value={this.state.email} onChange={
                                (event) => this.setState({email:event.target.value})
                            }/>
                        </div>
                        <div className="block">
                            <label className="input">Password:</label>
                            <input type="text" className="input" value={this.state.password} onChange={
                                (event) => this.setState({password:event.target.value})
                            }/>
                        </div>
                        <button className="submit" type="submit" value="Submit">Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(null, null) (withRouter(Header));