import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch ,edirect, withRouter } from 'react-router-dom';
import { Router } from 'react-router-dom'
import history from './services/history'
//components
import LogInComp from './components/login/login.comp';
import HomeComp from './components/home/home.comp';
import RegisterComp from './components/register/register.comp';
import RstpPlayer from './components/rstpPlayer/rstpPlayer.comp';
import GridComp from './components/grid/grid.comp';
import PrivateRoute from './components/privateRoute/privateRoute';

class App extends React.Component {
  componentDidMount() {
    console.log(this.props);
}
  render() {
    return (
        <div className="App">
          <header className="App-header">
           <Router history={history}>
            <Switch/>
              <Route path="/login" render={() => <LogInComp />} />
              <PrivateRoute component={HomeComp} path="/home" exact />
              <Route path="/register" render={() => <RegisterComp />} />
              <PrivateRoute component={RstpPlayer} path="/player" exact />
              <PrivateRoute component={GridComp} path="/grid" exact />
              <Route path="/" exact render={() => <LogInComp />} />
            <Switch/>
          </Router>
          </header>
        </div>
    );
  }
}
export default App;