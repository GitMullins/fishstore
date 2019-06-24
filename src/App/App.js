import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.scss';

import Auth from '../components/Auth/Auth';
import Home from '../components/Home/Home';

class App extends React.Component {
  render() {
    return (
    <div className="App">
      <Auth />
      <Home />
    </div>
    );
  }
}

export default App;
