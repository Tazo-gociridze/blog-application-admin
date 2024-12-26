import { UseMutationOptions, UseMutationResult, useMutation } from "@tanstack/react-query";
import { createAddBlog, updateBlog } from "../../../api/blogs";
import { updateBlogTypes } from "../../../components/Forms/blogs/hooks/useBlogUpdateFormLogic";
import { BLOG_MUTATION_KEYS } from "./enum";

export interface newBlogType {
  title_en: string;
  description_en: string;
}

export const useCreateBlogMutation = ({
  mutationOptions,
}: {
  mutationOptions: Omit<UseMutationOptions<any, void, newBlogType>, "mutationKey">;
}): UseMutationResult<void, void, newBlogType> => {
  return useMutation<void, void, newBlogType>({
    mutationKey: [BLOG_MUTATION_KEYS.CREATE_BLOG],
    mutationFn: createAddBlog,
    ...mutationOptions,
  });
};


export const useUpdateBlogMutation = ({
    mutationOptions,
  }: {
    mutationOptions: Omit<UseMutationOptions<void, void, updateBlogTypes>, "mutationKey">;
  }): UseMutationResult<void, void, updateBlogTypes> => {
    return useMutation<void, void, updateBlogTypes>({
      mutationKey: [BLOG_MUTATION_KEYS.UPDATE_BLOG],
      mutationFn: ({ image_url, id, ...payload}) => updateBlog(image_url, id, payload),
      ...mutationOptions,
    });
  };
