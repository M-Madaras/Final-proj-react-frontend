import { List, Checkbox, Button } from 'antd';
import { DeleteOutlined} from '@ant-design/icons';




export default function GoalsCard({ item, setError, setLoading, setGoalList }) {
  const deleteGoal = () => {
    setLoading(true);
    fetch(`https://mtm-final-proj.web.app/goals/delete/${item.id}`,{
      // fetch('http://localhost:5055/goals',{
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
         
          },
       
      })
      .then(response => response.json())
      .then(data => {
        setGoalList(data);
        setError('');
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }
  const handleCheck = () => {
    // make a patch request to API
    setLoading(true);
    const body = { done: !item.done };
    fetch(`https://mtm-final-proj.web.app/goals/update/${item.id}`, {
      // fetch(`http://localhost:5555/tasks/${item.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      })
      .then(response => response.json())
      .then(data => {
        setGoalList(data);
        setError('');
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
    }
    return (
      <List.Item key={item.id}>
      <List.Item.Meta
        avatar={<Checkbox onClick={handleCheck} />}
        title={<p>{item.goal}</p>}
        />
      <Button>
       <DeleteOutlined onClick={()=>deleteGoal(item)} className='li' style={{ color: "red", marginLeft: 12 }} />
      </Button>

    </List.Item>
  )
}
