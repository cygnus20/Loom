import { c as create_ssr_component, i as escape } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h2 data-svelte-h="svelte-qh07kw">User profile</h2> ${escape(data.session.user.email)} <p data-svelte-h="svelte-1gvyn1v"><a href="/update_email">Change your email</a></p> <p data-svelte-h="svelte-1jx6sxi"><a href="/update_password">Change password</a></p>`;
});
export {
  Page as default
};
