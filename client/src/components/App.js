import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './Home';
import Contact from './Contact';
import Header from './Header';
import Create from './Create';
import Login from './Login';
import Dashboard from './Dashboard';
import {connect}from 'react-redux';
import * as actions from '../actions';

class App extends React.Component {

  componentDidMount(){
      this.props.fetchUser()
  }

  render(){
    return (
      <div>
        
        <BrowserRouter>
            <div>
              <Header />
              <Route path="/" exact component={Home}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/new" component={Create}/>
              <Route path="/login" component={Login}/>
              <Route path="/dashboard" component={Dashboard}/>
            </div>
        </BrowserRouter>
      </div>
    )
  }
  
}

export default connect(null, actions) (App);