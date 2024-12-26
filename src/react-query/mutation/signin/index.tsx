import {
  UseMutationOptions,
  UseMutationResult,
  useMutation,
} from "@tanstack/react-query";
import { SignInDataType, signin } from "../../../api/signin";
import { SIGN_IN_MUTATION_KEYS } from "./enum";

interface useSignInMutationResType {
  app_metadata: string;
  confirmed_at: string;
  created_at: string;
  email: string;
  email_confirmed_at: string;
  id: string;
  identities: string;
  phone: string;
  role: string;
  updated_at: string;
  user_metadata: {};
}

export const useSignInMutation = ({
  mutationOptions,
}: {
  mutationOptions: Omit<
    UseMutationOptions<useSignInMutationResType, any, SignInDataType>,
    "mutationKey"
  >;
}): UseMutationResult<useSignInMutationResType, any, SignInDataType> => {
  return useMutation<any, any, SignInDataType>({
    mutationKey: [SIGN_IN_MUTATION_KEYS.SIGN_IN],
    mutationFn: (signInData) => signin(signInData),
    ...mutationOptions,
  });
};
