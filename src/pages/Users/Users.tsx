import { Button, Space, Table } from "antd";
import type { TableProps } from "antd";
import { getUsersList } from "../../api/users";
import { useQuery } from "@tanstack/react-query";
import { UserDataType } from "./usersData";
import { Link } from "react-router-dom";

const Users = () => {
  const { data } = useQuery({
    queryKey: ["mappedUsersList"],
    queryFn: getUsersList,
  });


  console.log(data);

  const columns: TableProps<UserDataType>["columns"] = [
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

  return (
    <div>
      <Link to={"/user/create"}>
        <Button className="mb-6">Add user</Button>
      </Link>
      {/* @ts-ignore */}
      <Table columns={columns} dataSource={data}></Table>
    </div>
  );
};

export default Users;
