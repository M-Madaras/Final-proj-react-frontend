import { useState, useEffect } from 'react';
import { ContainerFilled, UserOutlined } from '@ant-design/icons';
import { BrowserRouter, Link } from 'react-router-dom';
import { Layout, Menu, Avatar, Space, Divider } from 'antd';
import GoalList from '../Main/GoalsList';
import AddGoal from '../Main/AddGoal';
import GifHeader from '../Main/Header1';
import DropdownBar from '../Main/Dropdown';
import Navbar from '../Main/NavBar';
import Footer from '../Main/Footer';
import Timer from '../Main/Timer';


const { Header, Content} = Layout;

export default function SecretStuff() {
    const [goallist, setGoalList] = useState();
   
      <Timer/>
      useEffect(() => {
      }, []);
      return (
        <div>
    
          
    
        <Layout className="layout">
          
            <h1 className='App-header'>!!!The Boca Code Goal Setter App!!!</h1>
          
          <BrowserRouter>
      
       <Space>
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                >
                  <DropdownBar />
                
                  <Avatar size={48} icon={<UserOutlined />} />
                  <h2>-  Welcome To My Goal Setter App -</h2>
             
              </Menu>
          </Space>
    
            
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
              
              <div class="ImageWrapper">
                <img src="https://pbs.twimg.com/media/CjzfmDJUYAA9Mmv.png" />
              </div>
          
        <Footer />
          </div>
    
        </Layout>
        </div>
      );
}