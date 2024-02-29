import type { Project } from '$lib/types';
import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { projects } from '../../store/store';

let projectItems: Array<Project>;
//const unsubscribe = projects.subscribe((value) => projectItems = value)

export const actions = {
	create: async ({ request, locals: { getSession, supabase } }) => {
        const session = await getSession();
        const user = session.user;
		const formData = await request.formData();
        const projectName = formData.get('project_name');
        const name = projectName?.toString() ?? "";
        //const userId = 
        //const newProject: Project = {id, name, tasks: [], createdAt: Date.now()}

        let { data, error } = await supabase.from("projects").insert([
            {user_id: user.id, name: name, tasks: []}
        ]);

        if (error) {
            throw new Error(error.message);
        }
            

         return data;

        //throw redirect(303, "/project")
	},
    rename: async ({ request, locals: { getSession, supabase } }) => {
        const session = await getSession();
        const user = session.user;
        const formData = await request.formData();
        const projectName = formData.get('project_name');
        const projectId = formData.get('id');
        const name = projectName?.toString() ?? "";
        const id = projectId as unknown as number

        let { error } = await supabase.from("projects").update({name: name}).eq("user_id", user.id).eq("id", id);

        if (error) {
            throw new Error(error.message);
        }

        throw redirect(303, "/project")
    }
} satisfies Actions;

export const load = (async ({ locals: { getSession, supabase } }) => {
    const session = await getSession();

    if (!session){
        throw redirect(303, "/login_logout")
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
}) satisfies PageServerLoad;