import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from './redux/Store';
import './App.css';
import Header from './components/Header';
import MainSpace from './components/MainSpace';
import Footer from './components/Footer';

class App extends Component{
  render(){
    return (
      <Provider store = {store}>
          <div className="App">
              <Header/>
              <MainSpace/>
              <Footer/>
          </div>
      </Provider>
    )
  }
}

export default App;
