import {
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from "@tanstack/react-query";
import { BlogsDataTypes } from "../../../utils/admin";
import { getBlogsList, getSpecificBlog } from "../../../api/blogs";
import { useParams } from "react-router-dom";
import { BLOG_QUERY_KEYS } from "./enum";

interface useGetBlogsListQueryPropsInterface {
  queryOptions?: Omit<UseQueryOptions<any, void, BlogsDataTypes[]>, "queryKey">;
}

interface useGetSpecificBlogQueryPropsInterface {
  queryOptions?: Omit<
    UseQueryOptions<string | undefined, void, BlogsDataTypes>,
    "queryKey"
  >;
}

export const useGetBlogsListQuery = ({
  queryOptions = {},
}: useGetBlogsListQueryPropsInterface): UseQueryResult<
  BlogsDataTypes[],
  void
> => {
  return useQuery<void, void, BlogsDataTypes[]>({
    queryKey: [BLOG_QUERY_KEYS.GET_BLOGS_LIST],
    queryFn: getBlogsList,
    ...queryOptions,
  });
};

export const useGetSpecificBlogQuery = ({
  queryOptions = {},
}: useGetSpecificBlogQueryPropsInterface): UseQueryResult<
  BlogsDataTypes,
  void
> => {
  const { id } = useParams();
  return useQuery<string | undefined, void, BlogsDataTypes>({
    queryKey: [BLOG_QUERY_KEYS.SPECIFIC_BLOG],
    queryFn: () => getSpecificBlog(id),
    ...queryOptions,
  });
};
