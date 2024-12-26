import { Button, Form, Input, Skeleton } from "antd";
import { useUserUpdateFormLogic } from "./hooks/useUserUpdateFormLogic";

const UserUpdateForm = () => {
  const { form, data, isLoading, handleFinish } = useUserUpdateFormLogic();

  return (
    <div>
      <h1 className="text-xl mb-6">Update user</h1>
      {!isLoading ? (
        <Form
          initialValues={{
            email: data?.email,
            phone: data?.phone,
          }}
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
          <Form.Item label="Email" name="email" rules={[{ required: false }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Phone" name="phone" rules={[{ required: false }]}>
            <Input />
          </Form.Item>

          <Form.Item label=" ">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <Skeleton active />
      )}
    </div>
  );
};

export default UserUpdateForm;
