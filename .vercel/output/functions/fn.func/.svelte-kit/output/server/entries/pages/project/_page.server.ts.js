import { r as redirect } from "../../../chunks/index.js";
const actions = {
  create: async ({ request, locals: { getSession, supabase } }) => {
    const session = await getSession();
    const user = session.user;
    const formData = await request.formData();
    const projectName = formData.get("project_name");
    const name = projectName?.toString() ?? "";
    let { data, error } = await supabase.from("projects").insert([
      { user_id: user.id, name, tasks: [] }
    ]);
    if (error) {
      throw new Error(error.message);
    }
    return data;
  },
  rename: async ({ request, locals: { getSession, supabase } }) => {
    const session = await getSession();
    const user = session.user;
    const formData = await request.formData();
    const projectName = formData.get("project_name");
    const projectId = formData.get("id");
    const name = projectName?.toString() ?? "";
    const id = projectId;
    let { error } = await supabase.from("projects").update({ name }).eq("user_id", user.id).eq("id", id);
    if (error) {
      throw new Error(error.message);
    }
    throw redirect(303, "/project");
  }
};
const load = async ({ locals: { getSession, supabase } }) => {
  const session = await getSession();
  if (!session) {
    throw redirect(303, "/login_logout");
  }
  const user = session.user;
  const { data, error } = await supabase.from("projects").select("*").eq("user_id", user.id);
  console.log(data);
  if (error) {
    throw new Error(error.message);
  }
  return {
    projectItems: data ?? []
  };
};
export {
  actions,
  load
};
