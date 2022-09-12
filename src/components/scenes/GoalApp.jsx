import { useState, useEffect } from 'react';
import {  UserOutlined } from '@ant-design/icons';
import { BrowserRouter } from 'react-router-dom';
import { Layout, Menu, Avatar, Space, Button } from 'antd';
import GoalList from '../Main/GoalsList';
import AddGoal from '../Main/AddGoal';
import GifHeader from '../Main/Header1';
import DropdownBar from '../Main/Dropdown';
import Footer from '../Main/Footer';

import "../../styles/Navbar.css"


const { Content, Header} = Layout;

export default function SecretStuff() {
    const [goallist, setGoalList] = useState();
   
      
      useEffect(() => {
      }, []);
      return (
        <div>
          
        <Layout className="layout">

          
            <h1 className='App-header'>!!!🎆The Goal Setter App🎆!!!</h1>
          
          <BrowserRouter>
      
          <Header>
       <Space >
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                Space 
                >
                  <DropdownBar />
                 
                  <Avatar size={48} icon={<UserOutlined />} />
                 
                  <h2>-  Welcome To My Goal Setter App -</h2>
                 
             <Button>Logout</Button>

              </Menu>
          </Space>
                  </Header>
    
            
          </BrowserRouter>
         
          <Content
            style={{
              padding: '0 50px',
            }}
            >
            <div className="site-layout-content">
              <GoalList  goallist={goallist} setGoalList={setGoalList} />
              <AddGoal  setGoalList={setGoalList} />
            </div>
          </Content>
          <div countDown>
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
              
              {/* <div class="ImageWrapper">
                <img src="https://pbs.twimg.com/media/CjzfmDJUYAA9Mmv.png" alt='galaxy chill' />
              </div> */}
          
        <Footer />
          </div>
    
        </Layout>
        </div>
      );  
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
    dayMonth = "01/01/",
    GoalCountdown = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > GoalCountdown) {
    GoalCountdown = dayMonth + nextYear;
  }
  //end
  const countDown = new Date(GoalCountdown).getTime(),
  // eslint-disable-next-line 
    x = setInterval(
      function () {
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
