import { useState, useEffect } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { BrowserRouter, Link } from 'react-router-dom';
import { Layout, Menu, Avatar, Space, Divider } from 'antd';
import GoalList from './components/Main/GoalsList';
import AddGoal from './components/Main/AddGoal';
import SignUp from './components/scenes/SignUp';
import Login from './components/scenes/Login';
import GifHeader from './components/Main/Header1';
import DropdownBar from './components/Main/Dropdown';
import './App.css';



const { Header, Content, Footer } = Layout;


function App() {
  const [goallist, setGoalList] = useState();
  const [token, setToken] = useState();
  const [isUser, setIsUser] = useState(false);

  function ChangeBkBtn () {
    document.querySelector( "button" )
      .addEventListener( "click", function () {
        var wrapper = document.querySelector( ".ImageWrapper" );
        var color = wrapper.style.backgroundColor || "white";
        wrapper.style.backgroundColor = color === "white" ? "black" : "white"; 
      } );
}



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
    <Layout className="layout">
      <BrowserRouter>
        <Header>

          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
          >

            <Space split={<Divider type="vertical" />}>
              <DropdownBar />

              <Avatar size={48} icon={<UserOutlined />} />
              <br />
              <h2>-  Welcome To My Goal Setter App -</h2>
              <br />
              <br />

              <Menu.Item key="0">
                <Link className='li2' to="/Signup">Sign Up</Link>
              </Menu.Item>
              <Menu.Item key="1">
                <Link className='li2' to="/">Goals</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link className='li2' to="/Login">Login</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link className='li2' to="/Logout">Logout</Link>
              </Menu.Item>
            </Space>
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
  );
}


export default App;


