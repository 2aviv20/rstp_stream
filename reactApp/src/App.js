import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ButtonCounter from './components/counter.comp';
// import UsersList from './components/usersList.comp';
// import LogInComp from './components/login/login.comp';
// import RegisterComp from './components/register/register.comp';
import RstpPlayer from './components/rstpPlayer/rstpPlayer.comp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ButtonCounter /> */}
        {/* <UsersList /> */}
        {/* <LogInComp /> */}
        {/* <RegisterComp /> */}
        <RstpPlayer/>
      </header>
    </div>
  );
}
export default App;