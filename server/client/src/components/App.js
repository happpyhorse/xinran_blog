import React, { Component } from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';
//handle history object ourselves
import history from '../history';

import Menu from './Menu';
import Sidebar from './Sidebar';
import PostCreate from './posts/PostCreate';
import PostEdit from './posts/PostEdit';
import PostDelete from './posts/PostDelete';
import PostShow from './posts/PostShow';
import PostList from './posts/PostList';

const mql = window.matchMedia(`(min-width: 768px)`);


class App extends Component {
    state = {
        docked: mql.matches,
        open: false
    }

    componentDidMount() {
        this.props.fetchUser();
        mql.addListener(this.mediaQueryChanged);
    }

    componentWillUnmount() {
        mql.removeEventListener(this.mediaQueryChanged);
    }

    mediaQueryChanged = () => {
        this.setState({
            docked: mql.matches,
            open: false
        });
    }

    toggleOpen = () => {
        this.setState({ open: !this.state.open });
    }

    onSetOpen = (open) => {
        this.setState({ open });
    }


    renderMobileHeader() {
        return (
            <div id="header-mobile">
                <Link id="nav-title" to="/posts/">Xinran</Link>
                <span id="nav-toggle" onClick={this.toggleOpen}>=</span>
            </div>
        );
    }

    render() {
        const { docked, open } = this.state;
        return (
            <Router history={history}>
                <Sidebar
                    docked={docked}
                    open={open}
                    onSetOpen={this.onSetOpen}
                    sidebar={(<Menu />)}
                >
                    {!docked && this.renderMobileHeader()}
                    {/* create a plain router instead of BrowserRouter, since we want to have access to history object in action creator */}

                    <main>
                        {/* show only one of these components */}
                        <Switch>
                            <Route path="/" exact component={PostList} />
                            <Route path="/posts" exact component={PostList} />
                            <Route path="/posts/new" exact component={PostCreate} />
                            <Route path="/posts/edit/:id" exact component={PostEdit} />
                            <Route path="/posts/delete/:id" exact component={PostDelete} />
                            <Route path="/posts/:id" exact component={PostShow} />
                        </Switch>
                    </main>

                </Sidebar>
            </Router>


        );
    };
}

export default connect(null, actions)(App);