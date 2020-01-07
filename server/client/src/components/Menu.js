import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Menu extends Component {


    renderContent() {
        const { auth } = this.props;
        return (
            <>
                <li key="posts">
                    <Link to="/posts/">Posts</Link>
                </li>
                {auth &&
                    <li key="create">
                        <Link to="/posts/new">Create</Link>
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
                <Link id="nav-title" to="/posts/">Xinran</Link>
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