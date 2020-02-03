import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Redirect, withRouter } from 'react-router-dom';
//components
import ButtonCounter from './components/counter.comp';
// import UsersList from './components/usersList.comp';
import LogInComp from './components/login/login.comp';
import HomeComp from './components/home/home.comp';
import RegisterComp from './components/register/register.comp';
import RstpPlayer from './components/rstpPlayer/rstpPlayer.comp';
import GridComp from './components/grid/grid.comp';

class App extends React.Component {
  componentDidMount() {
    console.log(this.props);
}
  render() {
    return (
        <div className="App">
          <header className="App-header">
            {/* <Redirect from="/" exact to="/login"/> */}
            <Route path="/login" render={() => <LogInComp />} />
            <Route path="/home" render={(props) => <HomeComp />} />
            <Route path="/counter" render={() => <ButtonCounter />} />
            <Route path="/register" render={() => <RegisterComp />} />
            <Route path="/player" render={() => <RstpPlayer />} />
            <Route path="/grid" render={() => <GridComp />} />
            {/* <UsersList /> */}
          </header>
        </div>
    );
  }
}
export default App;