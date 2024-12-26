import { Space, TableProps } from "antd";
import { Link } from "react-router-dom";

export interface BlogsDataType {
  key: string;
  email: string;
  age: number;
  address: string;
  tags: string[];
}

export const columns: TableProps<BlogsDataType>["columns"] = [
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
