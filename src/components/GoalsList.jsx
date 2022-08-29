import { useEffect } from "react";

export default function GoalList({ goallist, setGoalList}) {
    useEffect(() => {
        fetch('https://final-proj.web.app/goals')
        .then(result => result.json())
        .then(goals => setGoalList(goals))
        .catch(console.error)
    }, [setGoalList]);
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
}