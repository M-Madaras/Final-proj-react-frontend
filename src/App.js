import { useState, useEffect } from 'react';
import { ContainerFilled, UserOutlined } from '@ant-design/icons';
import { BrowserRouter, Link } from 'react-router-dom';
import { Layout, Menu, Avatar, Space, Divider } from 'antd';
import GoalList from './components/Main/GoalsList';
import AddGoal from './components/Main/AddGoal';
import SignUp from './components/scenes/SignUp';
import Logout from './components/scenes/Logout';
import Login from './components/scenes/Login';
import GifHeader from './components/Main/Header1';
import DropdownBar from './components/Main/Dropdown';
import Navbar from './components/Main/NavBar';
import './App.css';


const { Header, Content, Footer } = Layout;


function App() {
  const [goallist, setGoalList] = useState();
  const [token, setToken] = useState();
  const [isUser, setIsUser] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState(false)
  const [signUpVisible, setSignUpVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
  const [logoutVisible, setLogoutVisible] = useState(false);


  (function timer() {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    // the current clock is set for a yearly reset at new years
    let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "12/30/",
      GoalCountdown = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > GoalCountdown) {
      GoalCountdown = dayMonth + nextYear;
    }
    //end
    const countDown = new Date(GoalCountdown).getTime(),
      x = setInterval(function () {
        const now = new Date().getTime(),
          distance = countDown - now;

        (document.getElementById("days").innerText = Math.floor(distance / day));
        (document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        ));
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        ));
        (document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        ));
        //seconds
      }, 0);

  })();


  useEffect(() => {
    if (localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'))
    }
  }, [setToken]);
  return (
    <div>

       {/* <SignUp visible={signUpVisible} setVisible={setSignUpVisible} setIsUser = {setIsUser}setToken={setToken} />
        <Login visible={loginVisible} setVisible={setLoginVisible} setIsUser = {setIsUser}setToken={setToken} setIsLoggedIn = {setisLoggedIn}/>
        <Logout visible={logoutVisible} setVisible={setLogoutVisible} /> */}
   
    <Layout className="layout">
      
        <h1 className='App-header'>!!!The Boca Code Goal Setter App!!!</h1>
        {isUser? <h1><img className='tropical' src="/images/MyLogo.png" alt="trees.png" />Hello {isUser}</h1> : <h1><img className='tropical' src="/images/MyLogo.png" alt="trees.png" />Welcome Guest!!</h1>}
      <BrowserRouter>
    <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
          >
              <DropdownBar />
            
              <Avatar size={48} icon={<UserOutlined />} />
           
              <h2>-  Welcome To My Goal Setter App -</h2>
             
          
            <Menu.Item onClick={() => setSignUpVisible(!signUpVisible)} key="1">
              Sign up
            </Menu.Item>
            <Menu.Item onClick={() => setLoginVisible(!loginVisible)} key="2">
              Login
            </Menu.Item>
            <Menu.Item onClick={() => setLogoutVisible(!logoutVisible)} key="3">
              Logout
            </Menu.Item>
          </Menu>

          </Header>
      </BrowserRouter>
     
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <div className="site-layout-content">
          <GoalList token={token} goallist={goallist} setGoalList={setGoalList} />
          <AddGoal token={token} setGoalList={setGoalList} />
          {!token ?
            isUser
              ? <Login setIsUser={setIsUser} setToken={setToken} />
              : <SignUp setIsUser={setIsUser} setToken={setToken} />
            : null}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
      </Footer>

      <div>
        <div class="container">
          <h1 id="headline">Countdown</h1>
          <div id="countdown">
            <ul>
              <li><span className='li4' id="days"></span>days</li>
              <li><span className='li4' id="hours"></span>Hours</li>
              <li><span className='li4' id="minutes"></span>Minutes</li>
              <li><span className='li4' id="seconds"></span>Seconds</li>
            </ul>
          </div>
          <div id="content" class="emoji">
            <span>🥳</span>
            <span>🎉</span>
          </div>
        </div>
        <GifHeader />
          
          <div class="ImageWrapper">
            <img src="https://pbs.twimg.com/media/CjzfmDJUYAA9Mmv.png" />
          </div>
      
       

      </div>

    </Layout>
    </div>
  );
}


export default App;


