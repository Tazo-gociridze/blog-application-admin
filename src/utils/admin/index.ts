import { User } from "@supabase/supabase-js";
import dayjs from "dayjs";

export const mapUsersList = (user: User[]) => {
     return user?.map((data) => ({
        email: data?.email,
        createdAt: data?.created_at,
        phone: data?.phone,
        lastSignIn: data?.last_sign_in_at,
        key: data.id,
        id: data.id
     }))
}

export interface BlogsDataTypes  {
   title_en: string,
   description_en:  string,
   image_url: string,
   created_at:  string,
   key:  string,
   user_id:  string,
   blog_id: string;
}

export const mapBlogsList = (blogs: BlogsDataTypes[]) => {
   return [...blogs].reverse()?.map((blog: BlogsDataTypes) => ({
      title_en: blog?.title_en,
      description_en: blog?.description_en,
      image_url: blog?.image_url,
      created_at: blog?.created_at ? dayjs(blog.created_at).format("YYYY-MM-DD HH:mm") : null,
      key: blog.blog_id,
      user_id: blog.user_id,
      blog_id: blog.blog_id,
   }))
}