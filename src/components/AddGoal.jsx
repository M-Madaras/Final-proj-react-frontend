import { useState } from "react";
import { Input } from "antd";
const { Search } = Input;

export default function AddGoal({ setGoalList }) {
    const [goal, setGoal] = useState('');
    const addGoal = () => {
        fetch('https://final-proj.web.app/goals',{
            method: 'POST',
            headers: {
              'Content-Type' : 'application/json'
            },
            body: JSON.stringify({ goal, done: false })
        })
        .then(results => results.json())
        .then(data => {
            setGoalList(data)
            setGoal('')
        })
        .catch(console.error)
    }
    return(
        <Search
        value={goal}
        onChange={e => setGoal(e.target.value)}
        enterButton="Add"
        size='Large'
        onSearch={addGoal}
        />
    
    )
}