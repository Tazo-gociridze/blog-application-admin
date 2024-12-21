import { Button, Form, Input, Skeleton } from "antd";
import { useForm } from "antd/es/form/Form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getSpecificBlog, updateBlog } from "../../../api/blogs";
import { useState } from "react";

interface updateBlogTypes {
  image_url: string;
  id: string;
  title_en: string;
  description_en: string ;
}

const BlogUpdateForm = () => {
  const [imagePath, setImagePath] = useState<File | undefined | string>(undefined);

  const [form] = useForm();
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useQuery({
    queryKey: ["specificBlog"],
    queryFn: () => getSpecificBlog(id),
  });

  const { mutate } = useMutation({
    mutationKey: ["updateBlog"],
    mutationFn: ({ image_url, id, ...payload}: updateBlogTypes) => updateBlog(image_url, id, payload),
    onSuccess: () => {
      navigate("/blogs");
    },
  });

  const handleFinish = (formValues: Omit<updateBlogTypes, "image_url" | "id">) => {
    const imageUrl = typeof imagePath === 'string' ? imagePath : "";
     if(!id) {
          return
      }
      mutate({ image_url: imageUrl, id: id, ...formValues });
};

const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  if(e.target.files && e.target.files[0]) {
    setImagePath(e.target.files[0]);
  }
}

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
