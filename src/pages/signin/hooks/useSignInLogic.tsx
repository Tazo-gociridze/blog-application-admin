import { useForm } from "antd/es/form/Form";
import { useAuthContext } from "../../../contextApi/auth/hook/useAuthContext";
import { useNavigate } from "react-router-dom";
import { useSignInMutation } from "../../../react-query/mutation/signin";


export const useSignInLogic = () => {

    const [form] = useForm();
    const { handleStoreUser } = useAuthContext();
    const navigate = useNavigate();
  
    const { mutate } = useSignInMutation({mutationOptions: {
       onSuccess: (data) => {
        navigate("/");
        handleStoreUser(data);
      },
    }})
  
    const handleFinish = (formValues: { email: string; password: string }) => {
      mutate({ ...(formValues as { email: string; password: string }) });
    };

    return{
        form,
        handleFinish,
    }
}