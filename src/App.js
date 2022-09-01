import { useState } from 'react';
import AddGoal from './components/AddGoal';
import GoalList from './components/GoalsList';
import './App.css';


// import Login from './components/Login';

// function Auth() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   return (
//     <>
//       <header>
//         <h1>My First Login!!!</h1>
//       </header>
//       {isLoggedIn
//         ? <GoalList />
//         : <Login setIsLoggedIn={setIsLoggedIn}/>
//       }
//     </>

//   );
// }


function App() {
  const [goallist, setGoalList] = useState();
  return (
    
      <div id='BKC'>
    <>
    <header className='App-header'>
    <h1 className='App-header'>Goals</h1>
    </header>
    <h1 id='H1'>👍🏼YOU CAN DO IT!!!</h1>
    <div className='App'>
    <iframe allow="fullscreen" frameBorder="1" height="400" src="https://giphy.com/embed/trRoCGYflnr1PEvTbP/video" width="700"></iframe>
    </div>
    </>
    <GoalList goallist={goallist} setGoalList={setGoalList}/>
    <AddGoal setGoalList={setGoalList}/>
    </div>
    
    
  );
}

export default App;
