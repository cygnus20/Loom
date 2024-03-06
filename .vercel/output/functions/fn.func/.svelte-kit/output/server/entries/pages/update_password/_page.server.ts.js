import { AuthApiError } from "@supabase/supabase-js";
import { f as fail, r as redirect } from "../../../chunks/index.js";
const actions = {
  update_password: async ({ request, locals }) => {
    const formData = await request.formData();
    const password = formData.get("new_password");
    const { data, error: err } = await locals.supabase.auth.updateUser({
      password
    });
    if (err) {
      if (err instanceof AuthApiError && err.status >= 400 && err.status < 500) {
        return fail(400, {
          error: "invalidCredentials",
          invalid: true,
          message: err.message
        });
      }
      return fail(500, {
        error: "Server error. Please try again later."
      });
    }
    throw redirect(303, "/user_profile");
  }
};
async function load({ locals: { getSession } }) {
  const session = await getSession();
  if (!session) {
    throw redirect(303, "/");
  }
}
export {
  actions,
  load
};
