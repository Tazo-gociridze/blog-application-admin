import { FormProvider } from "react-hook-form";
import { Route } from "react-router-dom";
import UserUpdateView from "../../pages/Users/views/update";
import Users from "../../pages/Users/Users";
import UserCreateView from "../../pages/Users/views/create";
import { USER_ROUTES_PATHS } from "./enum";

export const USER_ROUTES = ({ formMethods }: any) => {
  return [
    <Route
      index
      element={
        <FormProvider {...formMethods}>
          <Users />
        </FormProvider>
      }
    />,
    <Route
      path={`${USER_ROUTES_PATHS.USER_UPDATE}/:id`}
      element={
        <FormProvider {...formMethods}>
          <UserUpdateView />
        </FormProvider>
      }
    />,
    <Route
      path={USER_ROUTES_PATHS.USER_CREATE}
      element={
        <FormProvider {...formMethods}>
          <UserCreateView />
        </FormProvider>
      }
    />,
  ];
};
