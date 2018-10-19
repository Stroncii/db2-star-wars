import React, { Component } from 'react';
import logo from './images/Vader.png';
import './App.css';
import HomeComponent from './components/home';
import FilmsDetailComponent from "./components/FilmsDetail";
import { Switch, Link, Route } from 'react-router-dom';
import PlanetsDetailComponent from "./components/PlanetsDetail";
import StarshipsDetailComponent from "./components/starshipsDetail";
import VehiclesDetailComponent from './components/vehiclesDetail';
import CharactersDetailComponent from "./components/characterDetail";
import SpeciesDetailComponent from './components/speciesDetail';


class App extends Component {

  componentDidMount () {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Link to={'/'}> <img src={logo} className="App-logo" alt="logo" /></Link>
          <p>
            Choose your side
          </p>
        </header>
          <Switch>
              <Route exact path="/" component={HomeComponent} />
              <Route path="/films/:id" component={FilmsDetailComponent} />
              <Route path="/planets/:id" component={PlanetsDetailComponent} />
              <Route path="/starships/:id" component={StarshipsDetailComponent} />
              <Route path="/vehicles/:id" component={VehiclesDetailComponent} />
              <Route path="/characters/:id" component={CharactersDetailComponent} />
              <Route path="/species/:id" component={SpeciesDetailComponent} />
          </Switch>
      </div>
    );
  }
}

export default App;
