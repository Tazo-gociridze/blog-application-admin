import { supabase } from "../../supabase";
import { mapBlogsList } from "../../utils/admin";

export const getBlogsList = async () => {
  return await supabase
    .from("blog-data")
    .select("*")
    .throwOnError()
    .then((res) => {
      return mapBlogsList(res.data);
    });
};

export const getSpecificBlog = async (id: string | undefined) => {
  if (id !== undefined) {
    return await supabase
      .from("blog-data")
      .select("*")
      .eq("blog_id", id)
      .single()
      .then((res) => {
        return res.data;
      });
  }
};

export const updateBlog = async (
  image_url: string,
  id: string,
  payload: { title_en: string; description_en: string }
) => {
  try {
    const res = await supabase
      .from("blog-data")
      .update({ ...payload, image_url })
      .eq("blog_id", id)
      .single();
    console.log(res);
    return res;
  } catch (e) {
    console.error(e);
  }
};

export const createAddBlog = async (newBlog: {
  title_en: string;
  description_en: string;
}) => {
  console.log(newBlog);
  return supabase.from("blog-data").insert({...newBlog, title_ka: '', description_ka: '', image_url: '', user_id: "62016931-9743-411a-bf62-54d0a46d3fdb"});
};
