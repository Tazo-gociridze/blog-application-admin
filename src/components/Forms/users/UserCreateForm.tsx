import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { useMutation } from "@tanstack/react-query";
import { createAddUser } from "../../../api/users";
import { useNavigate } from "react-router-dom";

interface userDataTypes {
  email: string;
  password: string;
  phone: string;
}

const UserCreateForm = () => {
  const [form] = useForm();
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationKey: ["createUser"],
    mutationFn: (newUser: userDataTypes) => createAddUser(newUser),
    onSuccess: () => {
      navigate("/");
    },
  });

  const handleFinish = (formValues: {
    email: string;
    password: string;
    phone: string;
  }) => {
    mutate({
      ...(formValues as userDataTypes),
    });
  };

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
