
import { useState } from 'react';
import { Input,} from 'antd';

const { Search } = Input;

export default function AddGoal({ setGoalList}) {
    const [goal, setGoal] = useState('');
    const addGoal = () => {
        if(!goal) return;
        fetch('https://mtm-final-proj.web.app/goals',{
        // fetch('http://localhost:5055/goals',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ goal, done: false })
        })
        .then(results => results.json())
        .then(data => {
            setGoalList(data);
            setGoal('');
        })
        .catch(console.error);
    }
    return(
        <div className="add-goal" >
            <Search
            value={goal}
            onChange={e => setGoal(e.target.value)}
            enterButton="NewGoal"
            size='Large'
            onSearch={addGoal}
            />
        </div>
    
    )
}
  