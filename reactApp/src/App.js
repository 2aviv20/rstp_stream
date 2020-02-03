import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Redirect} from 'react-router-dom';
//components
import ButtonCounter from './components/counter.comp';
// import UsersList from './components/usersList.comp';
import LogInComp from './components/login/login.comp';
import HomeComp from './components/home/home.comp';
import RegisterComp from './components/register/register.comp';
import RstpPlayer from './components/rstpPlayer/rstpPlayer.comp';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        {/* <Redirect from="/" exact to="/login"/> */}
        <Route path="/login" render={() =>  <LogInComp /> }/>
        <Route path="/home" render={() =>  <HomeComp /> }/>
        <Route path="/counter" render={() =>  <ButtonCounter /> }/>
        <Route path="/register" render={() =>  <RegisterComp /> }/>
        <Route path="/player" render={() =>  <RstpPlayer/> }/>
        {/* <UsersList /> */}
      </header>
    </div>
    </BrowserRouter>
  );
}
export default App;