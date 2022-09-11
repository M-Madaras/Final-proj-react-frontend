import { useEffect, useState, React } from 'react';
import { List, Alert } from 'antd';
import GoalsCard from './GoalsCard';

export default function GoalList({  goallist, setGoalList }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  // call the api and use setTasklist to fill in state...
  useEffect(() => {
    fetch('https://mtm-final-proj.web.app/goals', {
    // fetch('http://localhost:5555/tasks', {
      headers: {
       
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
  }, [ setGoalList,  setLoading, setError]);
  return (
    <>
      {(error) && <Alert
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
              setLoading={setLoading}
              setGoalList={setGoalList}
              setError={setError} />
              
          )}
        />
      </div>
    </>
  )
}
