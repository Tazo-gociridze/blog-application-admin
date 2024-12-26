import { Button, Table } from "antd";
import { Link } from "react-router-dom";
import { useGetBlogsListQuery } from "../../react-query/query/blogs";
import { BlogsDataType, columns } from "./Blogs.Data";



const Blogs = () => {
  const { data } = useGetBlogsListQuery({queryOptions: {}})

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
