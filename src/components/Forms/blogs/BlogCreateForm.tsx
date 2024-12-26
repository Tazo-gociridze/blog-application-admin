import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";

import { newBlogType, useCreateBlogMutation } from "../../../react-query/mutation/blogs";
import { useNavigate } from "react-router-dom";

const BlogCreateForm = () => {
  const [form] = useForm();
  const navigate = useNavigate();

  const { mutate } = useCreateBlogMutation({mutationOptions: {
    onSuccess: () => {
      navigate("/blogs");
    }
  }})

  const handleFinish = (formValues: newBlogType) => {
    mutate({...formValues});
  };

  return (
    <div>
      <h1 className="text-xl mb-6">Create blog</h1>
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
        <Form.Item label="Title_en" name="title_en">
          <Input />
        </Form.Item>

        <Form.Item label="Description_en" name="description_en">
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

export default BlogCreateForm;
