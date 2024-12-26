import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "../Layouts/AdminLayout/AdminLayout";
import { useForm } from "antd/es/form/Form";
import AuthLayout from "../Layouts/authLayer/AuthLayer";
import { USER_ROUTES } from "./user";
import { BLOG_ROUTES } from "./blogs";
import { AUTH_ROUTES } from "./auth";

const AppRoutes = () => {
  const formMethods = useForm();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          {USER_ROUTES({ formMethods })}
          {BLOG_ROUTES({ formMethods })}
        </Route>

        <Route path="/signin" element={<AuthLayout />}>
        {AUTH_ROUTES({ formMethods })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
