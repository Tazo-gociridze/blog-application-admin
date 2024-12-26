import { useForm } from "antd/es/form/Form";
import { useNavigate, useParams } from "react-router-dom";
import { useGetSpecificUserQuery } from "../../../../react-query/query/users";
import { useUpdateUserMutation } from "../../../../react-query/mutation/users";
import { formValuesType } from "../../../../api/users";

export const useUserUpdateFormLogic = () => {

    const [form] = useForm();
    const { id } = useParams();
    const navigate = useNavigate()
  
    const { data, isLoading } = useGetSpecificUserQuery({queryOptions: {}})
  
    const { mutate } = useUpdateUserMutation({mutationOptions: {
      onSuccess: () => {
        navigate('/')
      }
    }})
  
    const handleFinish = (formValues: Omit<formValuesType, 'id'>) => {
      if(!id) {
           return;
       }
        mutate({ id: id, ...formValues });
   };

    return{
        form,
        data,
        isLoading,
        handleFinish
    }
}