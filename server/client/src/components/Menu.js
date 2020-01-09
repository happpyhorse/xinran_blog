import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Menu extends Component {


    renderContent() {
        const { auth } = this.props;
        return (
            <>
                <li key="posts">
                    <NavLink to="/posts/" activeClassName="selected" exact>Posts</NavLink>
                </li>
                {auth &&
                    <li key="create">
                        <NavLink to="/posts/new" activeClassName="selected" exact>Create</NavLink>
                    </li>}
                {this.renderAuthLink()}
            </>
        );


    }

    renderAuthLink() {
        const { auth } = this.props;
        switch (auth) {
            case null:
                return;
            case false:
                return (
                    <li>
                        <a href="/auth/google">Login with Google</a>
                    </li>
                );
            default:
                return (<li key="logout">
                    <a href="/api/logout">Logout</a>
                </li>);
        }
    }
    render() {
        return (

            <nav>
                <NavLink id="nav-title" to="/posts/" exact>Xinran</NavLink>
                <ul id="nav-menu">
                    {this.renderContent()}
                </ul>

            </nav>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Menu);