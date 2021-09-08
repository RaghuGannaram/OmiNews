import React, {Component} from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import store from './redux/Store';
import './App.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import SignIn from './components/SignIn';
import MainSpace from './components/MainSpace';
import Footer from './components/Footer';

class App extends Component{
  render(){
    return (
        <Provider store = {store}>
          <Router>
            <div className="App">
              <Header/>
              <Switch>
                <Route path = "/" exact component={Welcome} />
                <Route path = "/signin" component={SignIn}/>
                <Route path = "/mainspace" component={MainSpace}/>
              </Switch>
              <Footer/>
            </div>
          </Router>
        </Provider>
    )
  }
}

export default App;
