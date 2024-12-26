import { FormProvider } from "react-hook-form";
import { Route } from "react-router-dom";
import SignIn from "../../pages/signin/SignIn";

export const AUTH_ROUTES = ({ formMethods }: any) => {
  return [
    <Route
      index
      element={
        <FormProvider {...formMethods}>
          <SignIn />
        </FormProvider>
      }
    />,
  ];
};
