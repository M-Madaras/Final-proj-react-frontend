import { useState, useEffect } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Layout, Menu, Avatar, TimePicker, Space } from 'antd';
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
      
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}>
      <DropdownBar/>
      <Avatar size={64} icon={<UserOutlined />} />
      <Timer/>
      <Space>
        Welcome To My Goal Setter App
      </Space>
          <Menu.Item key="0">Sign Up</Menu.Item>
          <Menu.Item key="1">Goals</Menu.Item>
          <Menu.Item key="2">Login</Menu.Item>
          <Menu.Item key="3">Logout</Menu.Item>
          
        </Menu>
      </Header>
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


