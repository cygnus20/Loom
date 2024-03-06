import { c as create_ssr_component, i as escape } from "../../../chunks/ssr.js";
import "devalue";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<h2 data-svelte-h="svelte-1lfm3uu">Change your password</h2> ${form?.invalid ? `<mark>${escape(form?.message)}!</mark>` : ``} <form action="?/update_password" method="POST" data-svelte-h="svelte-15q75xc"><label for="new_password">New password</label> <input name="new_password" required> <label for="password_confirm">Confirm new password</label> <input name="password_confirm" required> <button>Update password</button></form>`;
});
export {
  Page as default
};
