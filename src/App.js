import { useState, useEffect } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { BrowserRouter, Link, Routes } from 'react-router-dom';
import { Layout, Menu, Avatar, Space, Divider } from 'antd';
import GoalList from './components/GoalsList';
import AddGoal from './components/AddGoal';
import SignUp from './components/SignUp';
import Login from './components/Login';
import GifHeader from './components/Header1';
import './App.css';
import Timer from './components/Timer';
import DropdownBar from './components/Dropdown';


const { Header, Content, Footer } = Layout;

function App() {
  const [goallist, setGoalList] = useState();
  const [token, setToken] = useState();
  const [isUser, setIsUser] = useState(false);
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
      <DropdownBar/>
      <Avatar size={64} icon={<UserOutlined />} />
      <Timer/>
         -  Welcome To My Goal Setter App -
          
          <Menu.Item key="0">
            <Link to="/Signup">Sign Up</Link>
            </Menu.Item>
          <Menu.Item key="1">
            <Link to="/">Goals</Link>
            </Menu.Item>
          <Menu.Item key="2">
           <Link to="/Login">Login</Link> 
            </Menu.Item>
          <Menu.Item key="3">
            <Link to="/Logout">Logout</Link>
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
        <GifHeader />
      </div>

    </Layout>
  );
}

export default App;


