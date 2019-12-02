import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {

    renderContent() {
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
                <div className="nav-wrapper">
                    <Link to='/' className="left brand-logo">Xinran</Link>
                    <ul className="right">
                        { this.renderContent() }
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);