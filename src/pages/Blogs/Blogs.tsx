import { useQuery } from "@tanstack/react-query";
import { Button, Space, Table } from "antd";
import type { TableProps } from "antd";
import { getBlogsList } from "../../api/blogs";
import { Link } from "react-router-dom";

interface BlogsDataType {
  key: string;
  email: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: TableProps<BlogsDataType>["columns"] = [
  {
    title: "Title_en",
    dataIndex: "title_en",
    key: "titile_en",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Description_en",
    dataIndex: "description_en",
    key: "description_en",
  },
  {
    title: "Image_url",
    dataIndex: "image_url",
    key: "image_url",
  },
  {
    title: "Created_at",
    dataIndex: "created_at",
    key: "created_at",
  },
  {
    title: "Action",
    key: "action",
    render: (_, row) => (
      <Space size="middle">
        <Link to={`/blog/update/${row.key}`} className="text-green-600">
          Update user
        </Link>
      </Space>
    ),
  },
];

const Blogs = () => {
  const { data } = useQuery<any>({
    queryKey: ["getBlogsList"],
    queryFn: getBlogsList,
  });

  console.log(data);
  return (
    <div>
      <Link to={"/blogs/create"}>
        <Button className="mb-6">Add blog</Button>
      </Link>
      <Table<BlogsDataType> columns={columns} dataSource={data} />
    </div>
  );
};

export default Blogs;
