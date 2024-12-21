import { Button, Form, Input, Skeleton } from "antd";
import { useForm } from "antd/es/form/Form";
import {
  updateUser,
  formValuesType,
  getSpecificUser,
  formValuesTypeWithId,
} from "../../../api/users";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

const UserUpdateForm = () => {
  const [form] = useForm();
  const { id } = useParams();
  const navigate = useNavigate()
  const { data, isLoading } = useQuery({
    queryKey: ["specificUser"],
    queryFn: () => getSpecificUser(id),
  });

  const queryClient = useQueryClient();
  queryClient.invalidateQueries({ queryKey: ['mappedUsersList'] });

  const { mutate } = useMutation({
    mutationKey: ["updateUser"],
    mutationFn: ({id, ...payload }: formValuesTypeWithId) => updateUser(id, payload),
    onSuccess: () => {
      navigate('/')
    }
  });

  const handleFinish = (formValues: Omit<formValuesType, 'id'>) => {
    if(!id) {
         return;
     }
      mutate({ id: id, ...formValues });
 };

  return (
    <div>
      <h1 className="text-xl mb-6">Update user</h1>
      {!isLoading ? (
        <Form
          initialValues={{
            email: data?.email,
            phone: data?.phone,
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
          <Form.Item label="Email" name="email" rules={[{ required: false }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Phone" name="phone" rules={[{ required: false }]}>
            <Input />
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

export default UserUpdateForm;
