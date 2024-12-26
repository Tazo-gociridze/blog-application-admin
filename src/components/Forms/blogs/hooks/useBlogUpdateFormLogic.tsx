import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetSpecificBlogQuery } from "../../../../react-query/query/blogs";
import { useUpdateBlogMutation } from "../../../../react-query/mutation/blogs";
import { useForm } from "antd/es/form/Form";

export interface updateBlogTypes {
    image_url: string;
    id: string;
    title_en: string;
    description_en: string ;
  }
  

export const useBlogUpdateFormLogic = () => {
    const [imagePath, setImagePath] = useState<File | undefined | string>(undefined);
    const [ form ] = useForm();
    const { id } = useParams();
    const navigate = useNavigate();
  
    const { data, isLoading } = useGetSpecificBlogQuery({queryOptions: {}})
  
    const { mutate } = useUpdateBlogMutation({mutationOptions: {
      onSuccess: () => {
        navigate("/blogs")
      }
    }})
  
    const handleFinish = (formValues: Omit<updateBlogTypes, "image_url" | "id">) => {
      const imageUrl = typeof imagePath === 'string' ? imagePath : "";
       if(!id) {
            return
        }
        mutate({ image_url: imageUrl, id: id, ...formValues });
  };
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files && e.target.files[0]) {
      setImagePath(e.target.files[0]);
    }
  }


    return{
        form,
        data,
        isLoading,
        handleFinish,
        handleImageChange,
    }
}