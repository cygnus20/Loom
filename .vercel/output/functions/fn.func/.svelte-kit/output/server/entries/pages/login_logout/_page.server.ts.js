import { f as fail } from "../../../chunks/index.js";
import { AuthApiError } from "@supabase/supabase-js";
let redirect;
const actions = {
  login: async (event) => {
    const { request, url, locals } = event;
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    const { data, error: err } = await locals.supabase.auth.signInWithPassword({
      email,
      password
    });
    if (err) {
      if (err instanceof AuthApiError && err.status === 400) {
        return fail(400, {
          error: "Invalid credentials",
          email,
          invalid: true,
          message: err.message
        });
      }
      return fail(500, {
        message: "Server error. Try again later."
      });
    }
    throw redirect(303, "/");
  },
  googleOAuth: async ({ locals, url }) => {
    const { data, error } = await locals.supabase.auth.signInWithOAuth({ provider: "google" });
    throw redirect(303, data.url);
  },
  logout: async ({ locals }) => {
    await locals.supabase.auth.signOut();
    throw redirect(303, "/");
  }
};
async function load({ locals: { getSession } }) {
  const session = await getSession();
  if (session) {
    throw redirect(303, "/");
  }
}
export {
  actions,
  load
};
