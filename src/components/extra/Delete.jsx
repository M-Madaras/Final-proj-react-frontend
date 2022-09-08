import { useState } from "react";

export default function DeleteGoal({ setGoalList }) {
    const [goal, setGoal] = useState('');
    const deleteGoal = () => {
        fetch('https://mtm-final-proj.web.app/goals',{
        // fetch('http://localhost:5055/goals',{
            method: 'DELETE',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': token,
            },
            body: JSON.stringify({ goal, done: false })
        })
        .then(results => results.json())
        .then(data => {
            Event.preventDefault();
            setGoalList(data);
            setGoal('')
        })
        .catch(console.error);
    }
  
}