import { List, Checkbox, Button } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';





export default function GoalsCard({ item, setError, setLoading, setGoalList }) {
  const handleCheck = () => {
    // make a patch request to API
    setLoading(true);
    const body = { done: !item.done };
    fetch(`https://three-do-api-mtm.web.app/goals/${item.id}`, {
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
        avatar={<Checkbox />}
        title={<p>{item.goal}</p>}
      />
      <Button>
        <EditOutlined className='li' style={{ color: "blue", marginLeft: 12 }} />
      </Button>
      <Button>
       <DeleteOutlined className='li' style={{ color: "red", marginLeft: 12 }} />
      </Button>

    </List.Item>
  )
}