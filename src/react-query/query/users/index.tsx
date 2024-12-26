import {
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from "@tanstack/react-query";
import { getSpecificUser, getUsersList } from "../../../api/users";
import { UserDataType } from "../../../pages/Users/usersData";
import { useParams } from "react-router-dom";
import { USER_QUERY_KEYS } from "./enum";

interface useGetUsersListQueryPropsInterface {
  queryOptions?: Omit<UseQueryOptions<any, void, UserDataType[]>, "queryKey">;
}

interface useGetSpecificUserQueryPropsInterface {
  queryOptions?: Omit<UseQueryOptions<string | undefined, void, UserDataType>, "queryKey">;
}

export const useGetUsersListQuery = ({
  queryOptions = {},
}: useGetUsersListQueryPropsInterface): UseQueryResult<UserDataType[], void> => {
  return useQuery<void, void, UserDataType[]>({
    queryKey: [USER_QUERY_KEYS.MAPPED_USERS_LIST],
    queryFn: getUsersList,
    ...queryOptions,
  });
};

export const useGetSpecificUserQuery = ({
  queryOptions = {},
}: useGetSpecificUserQueryPropsInterface): UseQueryResult<UserDataType, void> => {
  const { id } = useParams();
  return useQuery<any, void, UserDataType>({
    queryKey: [USER_QUERY_KEYS.SPECIFIC_USER],
    queryFn: () => getSpecificUser(id),
    ...queryOptions,
  });
};
