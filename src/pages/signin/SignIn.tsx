import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signin } from "../../api/signin";


const SignIn = () => {
  const [form] = useForm();
  const navigate = useNavigate()

  const { mutate } = useMutation({
    mutationKey: ["signin"],
    mutationFn: (signInData: { email: string; password: string }) => signin(signInData),
    onSuccess: () => {
      navigate("/")
    }
  },);
  const handleFinish = (formValues: {
    email: string;
    password: string;
  }) => {
    mutate({ ...formValues as any});
  };

  return (
    <div>
      <h1 className="text-xl mb-6">Sign in</h1>
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

export default SignIn;
