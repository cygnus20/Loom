import { f as fail, r as redirect } from "../../../chunks/index.js";
import { AuthApiError } from "@supabase/supabase-js";
const actions = {
  reset_password: async ({ request, locals }) => {
    const formData = await request.formData();
    const email = formData.get("email");
    const { data, error: err } = await locals.supabase.auth.resetPasswordForEmail(
      email,
      { redirectTo: "/update_password" }
    );
    if (err) {
      if (err instanceof AuthApiError && err.status === 400) {
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
