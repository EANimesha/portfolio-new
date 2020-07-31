import React from 'react';
import './App.css';
import Home from './pages/home';
import { HashRouter, Switch,Route } from 'react-router-dom';
import Projects from './pages/projects';
import Education from './pages/education';
import Achievements from './pages/achivements';

function App() {
  return (
    <div className="App">
     <HashRouter basename="/">
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/home" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/education" component={Education} />
            <Route path="/achievements" component={Achievements} />
					</Switch>
				</HashRouter>
    </div>
  );
}

export default App;
