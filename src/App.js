import React from 'react';
import './App.css';
import Home from './pages/home';
import { HashRouter, Switch,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <HashRouter basename="/">
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/home" component={Home} />
					</Switch>
				</HashRouter>
    </div>
  );
}

export default App;
