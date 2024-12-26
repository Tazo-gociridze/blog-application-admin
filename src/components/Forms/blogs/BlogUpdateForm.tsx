import { Button, Form, Input, Skeleton } from "antd";
import { useBlogUpdateFormLogic } from "./hooks/useBlogUpdateFormLogic";


const BlogUpdateForm = () => {

  const {
    form,
    data,
    isLoading,
    handleFinish,
    handleImageChange,
  } = useBlogUpdateFormLogic() 

  return (
    <div>
      <h1 className="text-xl mb-6">Update blog</h1>
      {!isLoading ? (
        <Form
          initialValues={{
            title_en: data?.title_en,
            description_en: data?.description_en,
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
          <Form.Item
            label="Title_en"
            name="title_en"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Description_en"
            name="description_en"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Image"
            name="image_url"
            rules={[{ required: false }]}
          >
            <Input
              type="file"
              onChange={handleImageChange}
            />
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

export default BlogUpdateForm;
