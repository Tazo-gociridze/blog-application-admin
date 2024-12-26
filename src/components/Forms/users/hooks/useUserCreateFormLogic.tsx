import { useForm } from "antd/es/form/Form";
import { useNavigate } from "react-router-dom";
import { useCreateUserMutation } from "../../../../react-query/mutation/users";

export interface userDataTypes {
    email: string;
    password: string;
    phone: string;
  }

export const useUserCreateFormLogic = () => {
    const [form] = useForm();
    const navigate = useNavigate();
  
    const { mutate } = useCreateUserMutation({mutationOptions: {
      onSuccess: () => {
        navigate("/")
      }
    }})
  
    const handleFinish = (formValues: {
      email: string;
      password: string;
      phone: string;
    }) => {
      mutate({
        ...(formValues as userDataTypes),
      });
    };
  


    return {
        form,
        handleFinish
    }
}