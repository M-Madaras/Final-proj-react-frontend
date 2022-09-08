import { Modal, Form, Input, Button } from "antd";
export default function Logout({
  setToken,
  setIsUser,
  user,
  isLoggedIn,
  setIsLoggedIn,
  visible,
  setVisible,
}) {
  const handleLogout = ({ email, password }) => {
    fetch(
        'https://mtm-final-proj.web.app/users/login',
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setToken(data.token);
        localStorage.setItem("token", data.token);
        console.log(data.token);
        setVisible(false);
        setIsLoggedIn(false);
      })
      .catch((err) => alert(err.message));
  };
  return (
    <>
      <Modal
        onCancel={() => setVisible(false)}
        closable={true}
        visible={visible}
        title="Logout"
        footer={null}
      >
        <Form
          onFinish={handleLogout}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <Button onClick={() => setIsUser(false)} type={"submit"}>
            Log out
          </Button>
        </Form>
       
      </Modal>
    </>
  );
}