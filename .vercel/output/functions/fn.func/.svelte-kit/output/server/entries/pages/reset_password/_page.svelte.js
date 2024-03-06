import { c as create_ssr_component, v as validate_component, i as escape } from "../../../chunks/ssr.js";
import "devalue";
import { C as Card, L as Label, I as Input, B as Button } from "../../../chunks/Input.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<div class="flex h-max justify-center">${validate_component(Card, "Card").$$render($$result, { class: "w-full max-w-md" }, {}, {
    default: () => {
      return `<h3 class="text-xl font-medium text-gray-900 dark:text-white" data-svelte-h="svelte-yu7be8">Reset password</h3> <form class="flex flex-col space-y-6" action="?/reset_password" method="POST">${validate_component(Label, "Label").$$render($$result, { for: "email" }, {}, {
        default: () => {
          return `<span data-svelte-h="svelte-1bg9cgq">Email</span> ${validate_component(Input, "Input").$$render(
            $$result,
            {
              type: "email",
              name: "Email",
              placeholder: "name@domain.com",
              required: true
            },
            {},
            {}
          )}`;
        }
      })} ${validate_component(Button, "Button").$$render($$result, { type: "submit" }, {}, {
        default: () => {
          return `Get password`;
        }
      })}</form> ${form?.invalid ? `<mark>${escape(form?.message)}!</mark>` : ``}`;
    }
  })}</div>`;
});
export {
  Page as default
};
