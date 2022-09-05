import { List, Slider, Switch } from 'antd';
import Delete from './Delete';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

export default function GoalsCard({ token, item, setError, setLoading, setGoalList }) {
  const handleSwitch = () => {
    // make a patch request to API
    setLoading(true);
    const body = { done: !item.done };
    fetch(`https://three-do-api-mtm.web.app/goals/${item.id}`, {
    // fetch(`http://localhost:5555/tasks/${item.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
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
  avatar={<Switch/>}
        title={<p>{item.goal}</p>}
        />
        <EditOutlined />
        <DeleteOutlined />
    </List.Item>
  )
}