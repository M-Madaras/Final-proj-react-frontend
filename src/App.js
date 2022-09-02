import { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import GoalList from './components/GoalsList';
import AddGoal from './components/AddGoal';
import SignUp from './components/SignUp';
import Login from './components/Login';
import GifHeader from './components/Header1';
import './App.css';
import './components/Header1'

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
          <Menu.Item key="1">Goals</Menu.Item>
          <Menu.Item key="2">Login</Menu.Item>
          <Menu.Item key="3">Sign Up</Menu.Item>
        </Menu>
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <div className="site-layout-content">
          <h1>Goal Setter</h1>
          <GoalList token={token} goallist={goallist} setGoallist={setGoalList} />
          <AddGoal token={token} setGoallist={setGoalList} />
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
        {/* <GoalList goallist={goallist} setGoalList={setGoalList} /> */}
        {/* <AddGoal setGoalList={setGoalList} /> */}
      </div>

    </Layout>
  );
}

export default App;
