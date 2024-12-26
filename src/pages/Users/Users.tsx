import { Button, Table } from "antd";
import { columns } from "./usersData";
import { Link } from "react-router-dom";
import { useGetUsersListQuery } from "../../react-query/query/users";


const Users = () => {
  const { data } = useGetUsersListQuery({queryOptions: {}})

  return (
    <div>
      <Link to={"/user/create"}>
        <Button className="mb-6">Add user</Button>
      </Link>
      <Table columns={columns} dataSource={data}></Table>
    </div>
  );
};

export default Users;
