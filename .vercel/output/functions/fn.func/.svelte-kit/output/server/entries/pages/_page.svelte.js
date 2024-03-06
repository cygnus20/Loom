import { k as identity, c as create_ssr_component, a as compute_rest_props, l as createEventDispatcher, v as validate_component, h as compute_slots } from "../../chunks/ssr.js";
import { F as Frame } from "../../chunks/Frame.js";
import { twMerge } from "tailwind-merge";
import { C as CloseButton } from "../../chunks/CloseButton.js";
function fade(node, { delay = 0, duration = 400, easing = identity } = {}) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay,
    duration,
    easing,
    css: (t) => `opacity: ${t * o}`
  };
}
const TransitionFrame = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["transition", "params", "open", "dismissable"]);
  let { transition = fade } = $$props;
  let { params = {} } = $$props;
  let { open = true } = $$props;
  let { dismissable = false } = $$props;
  const dispatch = createEventDispatcher();
  function close(ev) {
    if (ev?.stopPropagation)
      ev.stopPropagation();
    open = false;
  }
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.params === void 0 && $$bindings.params && params !== void 0)
    $$bindings.params(params);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.dismissable === void 0 && $$bindings.dismissable && dismissable !== void 0)
    $$bindings.dismissable(dismissable);
  {
    dispatch(open ? "open" : "close");
  }
  return `${dismissable ? `${open ? `<div>${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, $$restProps), {}, {
    default: () => {
      return `${slots.default ? slots.default({ close }) : ``}`;
    }
  })}</div>` : ``}` : `${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, $$restProps), {}, {
    default: () => {
      return `${slots.default ? slots.default({ close }) : ``}`;
    }
  })}`} `;
});
const Alert = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["dismissable", "defaultClass"]);
  let $$slots = compute_slots(slots);
  let { dismissable = false } = $$props;
  let { defaultClass = "p-4 gap-3 text-sm" } = $$props;
  let divClass;
  if ($$props.dismissable === void 0 && $$bindings.dismissable && dismissable !== void 0)
    $$bindings.dismissable(dismissable);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  divClass = twMerge(defaultClass, ($$slots.icon || dismissable) && "flex items-center", $$props.class);
  return `${validate_component(TransitionFrame, "TransitionFrame").$$render($$result, Object.assign({}, { dismissable }, { color: "primary" }, { role: "alert" }, { rounded: true }, $$restProps, { class: divClass }), {}, {
    default: ({ close }) => {
      return `${$$slots.icon ? `${slots.icon ? slots.icon({}) : ``}` : ``} ${$$slots.icon || dismissable ? `<div>${slots.default ? slots.default({}) : ``}</div>` : `${slots.default ? slots.default({}) : ``}`} ${dismissable ? `${slots["close-button"] ? slots["close-button"]({ close }) : ` ${validate_component(CloseButton, "CloseButton").$$render(
        $$result,
        {
          class: "ms-auto -me-1.5 -my-1.5 dark:hover:bg-gray-700",
          color: $$restProps.color
        },
        {},
        {}
      )} `}` : ``}`;
    }
  })} `;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1 data-svelte-h="svelte-1506yr6">Welcome to Loom ...</h1> <div class="p-8">${validate_component(Alert, "Alert").$$render($$result, {}, {}, {
    default: () => {
      return `<span class="font-medium" data-svelte-h="svelte-1ffo80p">Info alert!</span>
      Change a few things up and try submitting again.`;
    }
  })}</div>`;
});
export {
  Page as default
};
