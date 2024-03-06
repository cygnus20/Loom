import { f as fail, r as redirect } from "../../../chunks/index.js";
import { AuthApiError } from "@supabase/supabase-js";
const actions = {
  register: async (event) => {
    const { request, locals } = event;
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    const { data, error: err } = await locals.supabase.auth.signUp({
      email,
      password
    });
    if (err) {
      if (err instanceof AuthApiError && err.status >= 400 && err.status < 500) {
        return fail(400, {
          error: "invalidCredentials",
          email,
          invalid: true,
          message: err.message
        });
      }
      return fail(500, {
        error: "Server error. Please try again later."
      });
    }
    if (!err && !!data.user && !data.user.identities.length) {
      return fail(409, {
        error: "User already exists",
        email,
        invalid: true,
        message: "User already exists"
      });
    }
    throw redirect(303, "/check_email");
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
