import { supabase } from "../../supabase";
import { mapUsersList } from "../../utils/admin";

export interface formValuesType {
  email: string;
  phone: string;
  image_url: string;
}

export interface formValuesTypeWithId extends formValuesType {
  id: string;
}

export const getUsersList = () => {
  return supabase.auth.admin.listUsers().then((res) => {
    return mapUsersList(res.data.users);
  });
};

export const updateUser = async (id: string, payload: formValuesType) => {
  console.log("fetchUpdateUser params:", { id, payload });
  try {
   await supabase.auth.admin.updateUserById(id, { ...payload });
  } catch (e) {
    console.error(e);
  }
};

export const getSpecificUser = (id: string | undefined) => {
  if (id !== undefined) {
    return supabase.auth.admin.getUserById(id).then((res) => res.data.user);
  }
};

export const createAddUser = async (newUser: {
  email: string;
  password: string;
  phone: string;
}) => {
  return supabase.auth.signUp({ ...newUser });
};
