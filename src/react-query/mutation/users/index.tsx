import { UseMutationOptions, UseMutationResult, useMutation } from "@tanstack/react-query";
import { createAddUser, formValuesTypeWithId, updateUser } from "../../../api/users";
import { userDataTypes } from "../../../components/Forms/users/hooks/useUserCreateFormLogic";
import { USER_MUTATION_KEYS } from "./enum";

export const useCreateUserMutation = ({
    mutationOptions,
  }: {
    mutationOptions: Omit<UseMutationOptions<any, void, userDataTypes>, "mutationKey">;
  }): UseMutationResult<void, void, userDataTypes> => {
    return useMutation<void, void, userDataTypes>({
      mutationKey: [USER_MUTATION_KEYS.CREATE_USER],
      mutationFn: (newUser: userDataTypes) => createAddUser(newUser),
      ...mutationOptions,
    });
  };


  export const useUpdateUserMutation = ({
    mutationOptions,
  }: {
    mutationOptions: Omit<UseMutationOptions<any, void, formValuesTypeWithId>, "mutationKey">;
  }): UseMutationResult<void, void, formValuesTypeWithId> => {
    return useMutation<void, void, formValuesTypeWithId>({
      mutationKey: [USER_MUTATION_KEYS.UPDATE_USER],
      mutationFn: ({id, ...payload }) => updateUser(id, payload),
      ...mutationOptions,
    });
  };