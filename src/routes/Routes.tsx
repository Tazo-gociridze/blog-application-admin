import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "../Layouts/AdminLayout/AdminLayout";
import Users from "../pages/Users/Users";
import Blogs from "../pages/Blogs/Blogs";
import UserCreateView from "../pages/Users/views/create";
import UserUpdateView from "../pages/Users/views/update";
import { FormProvider } from "antd/es/form/context";
import { useForm } from "antd/es/form/Form";
import BlogsUpdateForm from "../pages/Blogs/views/update";
import BlogsCreateView from "../pages/Blogs/views/create";
import SignIn from "../pages/signin/SignIn";
import AuthLayout from "../Layouts/authLayer/AuthLayer";

const AppRoutes = () => {
  const formMethods = useForm();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<AuthLayout />}>
          <Route
            index
            element={
              <FormProvider {...formMethods}>
                <SignIn />
              </FormProvider>
            }
          />
        </Route>


        <Route path="/" element={<AdminLayout />}>
          <Route
            path="/signin"
            element={
              <FormProvider {...formMethods}>
                <SignIn />
              </FormProvider>
            }
          />
          <Route
            index
            element={
              <FormProvider {...formMethods}>
                <Users />
              </FormProvider>
            }
          />
          <Route
            path="/user/update/:id"
            element={
              <FormProvider {...formMethods}>
                <UserUpdateView />
              </FormProvider>
            }
          />
          <Route
            path="/user/create"
            element={
              <FormProvider {...formMethods}>
                <UserCreateView />
              </FormProvider>
            }
          />
          <Route
            path="/blogs"
            element={
              <FormProvider {...formMethods}>
                <Blogs />
              </FormProvider>
            }
          />

          <Route
            path="/blogs/create"
            element={
              <FormProvider {...formMethods}>
                <BlogsCreateView />
              </FormProvider>
            }
          />

          <Route
            path="/blog/update/:id"
            element={
              <FormProvider {...formMethods}>
                <BlogsUpdateForm />
              </FormProvider>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
