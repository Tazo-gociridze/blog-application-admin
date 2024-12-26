import { Button, Form, Input } from "antd";
import { useUserCreateFormLogic } from "./hooks/useUserCreateFormLogic";

const UserCreateForm = () => {
  const { form, handleFinish } = useUserCreateFormLogic();

  return (
    <div>
      <h1 className="text-xl mb-6">Create user</h1>
      <Form
        form={form}
        onFinish={handleFinish}
        name="wrap"
        labelCol={{ flex: "110px" }}
        labelAlign="left"
        labelWrap
        wrapperCol={{ flex: 1 }}
        colon={false}
        style={{ maxWidth: 600 }}
      >
        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>

        <Form.Item label="Phone" name="phone">
          <Input />
        </Form.Item>

        <Form.Item label="Password" name="password">
          <Input />
        </Form.Item>

        <Form.Item label=" ">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UserCreateForm;
