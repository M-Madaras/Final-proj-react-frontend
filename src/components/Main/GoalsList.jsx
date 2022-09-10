import { useEffect, useState, React } from 'react';
import { List, Alert, Button } from 'antd';
import GoalsCard from './GoalsCard';


function itemAction(action, item, setLoading, setGoalListItems) {
  setLoading(true)
  const API_URL = `https://mtm-final-proj.web.app/goals/${item.userId}/${item.id}`
  const params = (action === 'done')
    ? {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ done: !item.done })
    }
    : {
      method: 'DELETE'
    }
  fetch(API_URL, params)
  .then(res => res.json())
  .then(data => {
    setGoalListItems(data)
    setLoading(false)
  })
  .catch(err => {
    console.log('error updating item: ', err)
    setLoading(false)
  })
}

function ListItem({ item, setLoading, setGoalListItems }) {
  const thisClassName = item.done ? 'done' : ''
  return (
    <List.Item
      actions={[
        <Button primary key="list-done" onClick={() => itemAction('done', item, setLoading, setGoalListItems)}>done</Button>,
        <Button danger key="list-delete" onClick={() => itemAction('delete', item, setLoading, setGoalListItems)}>delete</Button>,
      ]}
      key={item.item}
      className={thisClassName}>
      {item.item} </List.Item>
    )
}


export default function GoalList({  goallist, setGoalList, token }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  // call the api and use setTasklist to fill in state...
  useEffect(() => {
    fetch('https://mtm-final-proj.web.app/goals', {
    // fetch('http://localhost:5555/tasks', {
      headers: {
        'Authorization': token,
      }
    })
      .then(results => results.json())
      .then(goals => {
        setGoalList(goals);
        setLoading(false);
        setError('');
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      })
  }, [token, setGoalList,  setLoading, setError]);
  return (
    <>
      {(error && token) && <Alert
        message="Error"
        description={error}
        type="error"
        showIcon
      />}
      <div className='goal-list'>
        <List
        size="large"
        loading={loading}
        bordered
          dataSource={goallist}
          renderItem={(item) => (
            <GoalsCard
              key={item.id}
              item={item}
              token={token}
              setLoading={setLoading}
              setGoalList={setGoalList}
              setError={setError} />
              
          )}
        />
      </div>
    </>
  )
}
