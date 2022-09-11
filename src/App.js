import { useState, useEffect } from 'react';
import { Layout } from 'antd';
import Login from './components/scenes/Login';
import SecretStuff from './components/scenes/SecretStuff';
import './App.css';


const { Header, Content} = Layout;

function App() {
  const [goallist, setGoalList] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <header>
        <h1>My Goal App</h1>
      </header>
      {isLoggedIn
        ? <SecretStuff />
        : <Login setIsLoggedIn={setIsLoggedIn}/>
      }
    </>

  );
}

export default App;