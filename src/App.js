import { useState } from 'react';
import Login from './components/scenes/Login';
import SecretStuff from './components/scenes/GoalApp';
import './App.css';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <header>
        <img className='tropical' src='/images/MyLogo.png' alt='Trees logo'></img>
       
      </header>
      {isLoggedIn
        ? <SecretStuff />
        : <Login setIsLoggedIn={setIsLoggedIn}/>
      }
    </>

  );
}

export default App;