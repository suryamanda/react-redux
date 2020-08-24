import React from 'react';
import './App.css';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store'
import IceCreamContainer from './components/IceCreamContainer';
import UserContainer from './components/UserContainer';




function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <CakeContainer />
      <IceCreamContainer />
      <UserContainer />
    </div>
    </Provider>
  );
}

export default App;
