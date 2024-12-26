import { Space, TableProps } from "antd";
import { Link } from "react-router-dom";

export interface UserDataType {
  email: string | undefined;
  createdAt: string;
  phone: string | undefined;
  lastSignIn: string | null;
  key: string;
  id: string;
}


export const columns: TableProps<UserDataType>["columns"] = [
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Created at",
    dataIndex: "createdAt",
    key: "createdAt",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Last sign in",
    dataIndex: "lastSignIn",
    key: "lastSignIn",
  },
  {
    title: "Action",
    key: "action",
    render: (_, row) => (
      <Space size="middle">
        <Link
          to={`/user/update/${row.id}`}
          key={row.key}
          className="text-green-600"
        >
          Update user
        </Link>
      </Space>
    ),
  },
];