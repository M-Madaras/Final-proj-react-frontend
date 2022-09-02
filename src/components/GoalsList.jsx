import { useEffect, useState } from 'react';
import { List, Alert } from 'antd';
import GoalsCard from './GoalsCard';

export default function TodoList({ goallist, setGoalsList, token }) {
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
      .then(tasks => {
        setGoalsList(tasks);
        setLoading(false);
        setError('');
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      })
  }, [token, setGoalsList, setLoading, setError]);
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
          dataSource={goallist}
          loading={loading}
          renderItem={(item) => (
            <GoalsCard
              key={item.id}
              item={item}
              token={token}
              setLoading={setLoading}
              setTasklist={setGoalsList}
              setError={setError} />
          )}
        />
      </div>
    </>
  )
}
{/* 
    )
    if (!goallist) {
        return <h2>No Goals Have Been set!</h2>
    }
    <ul>
        {goallist.map(goal => (
            <li key={goal.id}>
                {goal.goal}
            </li>  
        ))}
    </ul>
} */} 