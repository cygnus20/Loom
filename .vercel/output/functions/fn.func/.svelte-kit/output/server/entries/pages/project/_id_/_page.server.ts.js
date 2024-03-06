let projectItem;
const actions = {
  save: async ({ request, locals: { getSession, supabase } }) => {
    const session = await getSession();
    const user = session.user;
    const formData = await request.formData();
    const id = Number(formData.get("project_id")?.toString());
    console.log(formData.get("project_tasks")?.toString() ?? "");
    const tasks = JSON.parse(formData.get("project_tasks")?.toString() ?? "");
    console.log(tasks);
    const markup = Number(formData.get("project_markUp"));
    const price = Number(formData.get("project_price"));
    let { error } = await supabase.from("projects").update({ tasks, markup, price }).eq("user_id", user.id).eq("id", id);
    if (error) {
      throw new Error(error.message);
    }
  }
};
const load = async ({ params, locals: { supabase, getSession } }) => {
  const session = await getSession();
  const user = session.user;
  const { id } = params;
  let { data, error } = await supabase.from("projects").select("*").eq("user_id", user.id).eq("id", id);
  console.log(user.id);
  console.log(id);
  console.log(data);
  data = data[0];
  projectItem = {
    id: data.id,
    userId: data.user_id,
    name: data.name,
    tasks: [...data.tasks],
    createdAt: data.created_at,
    markUp: data.markup,
    price: data.price
  };
  console.log(projectItem);
  return {
    projectItem
  };
};
export {
  actions,
  load
};
