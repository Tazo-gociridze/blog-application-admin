import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { useMutation } from "@tanstack/react-query";
import { createAddBlog } from "../../../api/blogs";

const BlogCreateForm = () => {
  const [form] = useForm();

  const { mutate } = useMutation({
    mutationKey: ["createBlog"],
    mutationFn: (newBlog: { title_en: string; description_en: string }) =>
      createAddBlog(newBlog),
  });

  const handleFinish = (formValues: {
    title_en: string;
    description_en: string;
  }) => {
    mutate({ ...formValues as any});
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
