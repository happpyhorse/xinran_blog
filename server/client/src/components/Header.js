import React, {Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component{
    render(){
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to='/' className="left brand-logo">Xinran</Link>
                    <ul className="right">
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;