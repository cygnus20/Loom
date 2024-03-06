import { c as create_ssr_component, v as validate_component, i as escape } from "../../../chunks/ssr.js";
import { C as Card, L as Label, I as Input, B as Button } from "../../../chunks/Input.js";
import "devalue";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<div class="flex h-screen justify-center items-center">${validate_component(Card, "Card").$$render($$result, { class: "w-full max-w-md" }, {}, {
    default: () => {
      return `<form class="flex flex-col space-y-6" action="?/register" method="POST"><h3 class="text-xl font-medium text-gray-900 dark:text-white" data-svelte-h="svelte-wwn3rw">Sign in to our platform</h3> ${validate_component(Label, "Label").$$render($$result, { for: "email", class: "space-y-2" }, {}, {
        default: () => {
          return `<span data-svelte-h="svelte-1bg9cgq">Email</span> ${validate_component(Input, "Input").$$render(
            $$result,
            {
              type: "email",
              name: "email",
              placeholder: "name@company.com",
              value: form?.email ?? "",
              required: true
            },
            {},
            {}
          )}`;
        }
      })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
        default: () => {
          return `<span data-svelte-h="svelte-1nyqqaq">Your password</span> ${validate_component(Input, "Input").$$render(
            $$result,
            {
              type: "password",
              name: "password",
              placeholder: "•••••",
              required: true
            },
            {},
            {}
          )}`;
        }
      })} ${validate_component(Button, "Button").$$render($$result, { type: "submit", class: "w-full" }, {}, {
        default: () => {
          return `Create account`;
        }
      })}</form>`;
    }
  })}</div> ${form?.invalid ? `<mark>${escape(form?.message)}!</mark>` : ``}`;
});
export {
  Page as default
};
