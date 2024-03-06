import { c as create_ssr_component, i as escape } from "../../../chunks/ssr.js";
import "devalue";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<h2 data-svelte-h="svelte-1p3rmeb">Change your email</h2> <form action="?/update_email" method="POST" data-svelte-h="svelte-ienv2x"><label for="email">new email</label> <input type="email" name="email" required> <button>Change email</button></form> ${form?.invalid ? `<mark>${escape(form?.message)}!</mark>` : ``}`;
});
export {
  Page as default
};
