import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';
//handle history object ourselves
import history from '../history';

import Header from './Header';
import PostCreate from './posts/PostCreate';
import PostEdit from './posts/PostEdit';
import PostDelete from './posts/PostDelete';
import PostShow from './posts/PostShow';

const Dashboard = () => <h2>Dashboard</h2>;
const Landing = () => <h2>Landing</h2>;


class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div className="container">
                {/* create a plain router instead of BrowserRouter, since we want to have access to history object in action creator */}
                <Router history={history}>
                    <div>
                        <Header />
                        {/* show only one of these components */}
                        <Switch>
                            <Route exact path="/" exact component={Landing} />
                            <Route path="/Landing" exact component={Dashboard} />
                            <Route path="/posts/new" exact component={PostCreate} />
                            <Route path="/posts/edit/:id" exact component={PostEdit} />
                            <Route path="/posts/delete/:id" exact component={PostDelete} />
                            <Route path="/posts/:id" exact component={PostShow} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    };
}

export default connect(null, actions)(App);