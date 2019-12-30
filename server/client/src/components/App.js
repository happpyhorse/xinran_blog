import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';
//handle history object ourselves
import history from '../history';

import Header from './Header';
import PostCreate from './posts/PostCreate';
import PostEdit from './posts/PostEdit';

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
                        <Route exact path="/" component={Landing} />
                        <Route path="/Landing" component={Dashboard} />
                        <Route path="/posts/new" exact component={PostCreate} />
                        <Route path="/posts/edit/:id" exact component={PostEdit} />
                        {/* <Route path="/posts/delete/:id" exact component={PostDelete} />
                        <Route path="/posts/show/:id" exact component={PostShow} /> */}
                    </div>
                </Router>
            </div>
        );
    };
}

export default connect(null, actions)(App);