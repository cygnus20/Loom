import { r as redirect } from "../../../chunks/index.js";
async function load({ locals: { getSession } }) {
  const session = await getSession();
  if (!session) {
    throw redirect(303, "/");
  }
}
export {
  load
};