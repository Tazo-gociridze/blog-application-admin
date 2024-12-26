import { supabase } from "../../supabase";
import { mapBlogsList } from "../../utils/admin";

export const getBlogsList = async () => {
  return await supabase
    .from("blog-data")
    .select("*")
    .throwOnError()
    .then((res) => {
      return mapBlogsList(res.data as any);
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
        console.log(res.data)
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
   await supabase
      .from("blog-data")
      .update({ ...payload, image_url })
      .eq("blog_id", id)
      .single();
  } catch (e) {
    console.error(e);
  }
};

export const createAddBlog = async (formValues: {
  title_en: string;
  description_en: string;
}) => {
  console.log(formValues);
  return supabase.from("blog-data").insert({...formValues, title_ka: '', description_ka: '', image_url: '', user_id: "62016931-9743-411a-bf62-54d0a46d3fdb"});
};
