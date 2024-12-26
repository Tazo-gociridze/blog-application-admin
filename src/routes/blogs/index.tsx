import { FormProvider } from "react-hook-form";
import { Route } from "react-router-dom";
import BlogsCreateView from "../../pages/Blogs/views/create";
import BlogsUpdateView from "../../pages/Blogs/views/update";
import Blogs from "../../pages/Blogs/Blogs";
import { BLOG_ROUTES_PATHS } from "./enum";

export const BLOG_ROUTES = ({ formMethods }: any) => {
  return [
    <Route
      path={BLOG_ROUTES_PATHS.BLOG_INDEX}
      element={
        <FormProvider {...formMethods}>
          <Blogs />
        </FormProvider>
      }
    />,

    <Route
    path={BLOG_ROUTES_PATHS.BLOG_CREATE}
      element={
        <FormProvider {...formMethods}>
          <BlogsCreateView />
        </FormProvider>
      }
    />,

    <Route
    path={`${BLOG_ROUTES_PATHS.BLOG_UPDATE}/:id`}
      element={
        <FormProvider {...formMethods}>
          <BlogsUpdateView />
        </FormProvider>
      }
    />,
  ];
};
