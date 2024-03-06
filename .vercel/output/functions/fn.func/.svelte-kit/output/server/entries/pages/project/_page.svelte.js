import { c as create_ssr_component, a as compute_rest_props, l as createEventDispatcher, f as add_attribute, i as escape, v as validate_component, h as compute_slots, g as getContext, b as spread, d as escape_object, e as escape_attribute_value, n as each } from "../../../chunks/ssr.js";
import { C as Card, B as Button, L as Label, I as Input } from "../../../chunks/Input.js";
import { twMerge } from "tailwind-merge";
import { F as Frame } from "../../../chunks/Frame.js";
import { C as CloseButton } from "../../../chunks/CloseButton.js";
import { D as Dropdown, a as DropdownItem } from "../../../chunks/DropdownItem.js";
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "open",
    "title",
    "size",
    "placement",
    "autoclose",
    "dismissable",
    "backdropClass",
    "defaultClass",
    "outsideclose",
    "dialogClass"
  ]);
  let $$slots = compute_slots(slots);
  let { open = false } = $$props;
  let { title = "" } = $$props;
  let { size = "md" } = $$props;
  let { placement = "center" } = $$props;
  let { autoclose = false } = $$props;
  let { dismissable = true } = $$props;
  let { backdropClass = "fixed inset-0 z-40 bg-gray-900 bg-opacity-50 dark:bg-opacity-80" } = $$props;
  let { defaultClass = "relative flex flex-col mx-auto" } = $$props;
  let { outsideclose = false } = $$props;
  let { dialogClass = "fixed top-0 start-0 end-0 h-modal md:inset-0 md:h-full z-50 w-full p-4 flex" } = $$props;
  const dispatch = createEventDispatcher();
  const getPlacementClasses = () => {
    switch (placement) {
      case "top-left":
        return ["justify-start", "items-start"];
      case "top-center":
        return ["justify-center", "items-start"];
      case "top-right":
        return ["justify-end", "items-start"];
      case "center-left":
        return ["justify-start", "items-center"];
      case "center":
        return ["justify-center", "items-center"];
      case "center-right":
        return ["justify-end", "items-center"];
      case "bottom-left":
        return ["justify-start", "items-end"];
      case "bottom-center":
        return ["justify-center", "items-end"];
      case "bottom-right":
        return ["justify-end", "items-end"];
      default:
        return ["justify-center", "items-center"];
    }
  };
  const sizes = {
    xs: "max-w-md",
    sm: "max-w-lg",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-7xl"
  };
  let frameClass;
  let backdropCls = twMerge(backdropClass, $$props.classBackdrop);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.autoclose === void 0 && $$bindings.autoclose && autoclose !== void 0)
    $$bindings.autoclose(autoclose);
  if ($$props.dismissable === void 0 && $$bindings.dismissable && dismissable !== void 0)
    $$bindings.dismissable(dismissable);
  if ($$props.backdropClass === void 0 && $$bindings.backdropClass && backdropClass !== void 0)
    $$bindings.backdropClass(backdropClass);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.outsideclose === void 0 && $$bindings.outsideclose && outsideclose !== void 0)
    $$bindings.outsideclose(outsideclose);
  if ($$props.dialogClass === void 0 && $$bindings.dialogClass && dialogClass !== void 0)
    $$bindings.dialogClass(dialogClass);
  {
    dispatch(open ? "open" : "close");
  }
  frameClass = twMerge(defaultClass, "w-full divide-y", $$props.class);
  return `${open ? ` <div${add_attribute("class", backdropCls, 0)}></div>   <div${add_attribute("class", twMerge(dialogClass, $$props.classDialog, ...getPlacementClasses()), 0)} tabindex="-1" aria-modal="true" role="dialog"><div class="${"flex relative " + escape(sizes[size], true) + " w-full max-h-full"}"> ${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, { rounded: true }, { shadow: true }, $$restProps, { class: frameClass }), {}, {
    default: () => {
      return ` ${$$slots.header || title ? `${validate_component(Frame, "Frame").$$render(
        $$result,
        {
          color: $$restProps.color,
          class: "flex justify-between items-center p-4 rounded-t-lg"
        },
        {},
        {
          default: () => {
            return `${slots.header ? slots.header({}) : ` <h3 class="${"text-xl font-semibold " + escape($$restProps.color ? "" : "text-gray-900 dark:text-white", true) + " p-0"}">${escape(title)}</h3> `} ${dismissable ? `${validate_component(CloseButton, "CloseButton").$$render(
              $$result,
              {
                name: "Close modal",
                color: $$restProps.color
              },
              {},
              {}
            )}` : ``}`;
          }
        }
      )}` : ``}  <div${add_attribute("class", twMerge("p-6 space-y-6 flex-1 overflow-y-auto overscroll-contain", $$props.bodyClass), 0)} role="document">${dismissable && !$$slots.header && !title ? `${validate_component(CloseButton, "CloseButton").$$render(
        $$result,
        {
          name: "Close modal",
          class: "absolute top-3 end-2.5",
          color: $$restProps.color
        },
        {},
        {}
      )}` : ``} ${slots.default ? slots.default({}) : ``}</div>  ${$$slots.footer ? `${validate_component(Frame, "Frame").$$render(
        $$result,
        {
          color: $$restProps.color,
          class: "flex items-center p-6 space-x-2 rtl:space-x-reverse rounded-b-lg"
        },
        {},
        {
          default: () => {
            return `${slots.footer ? slots.footer({}) : ``}`;
          }
        }
      )}` : ``}`;
    }
  })}</div></div>` : ``} `;
});
const DotsVerticalOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "strokeLinecap", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { strokeLinecap = ctx.strokeLinecap || "round" } = $$props;
  let { ariaLabel = "dots vertical outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.strokeLinecap === void 0 && $$bindings.strokeLinecap && strokeLinecap !== void 0)
    $$bindings.strokeLinecap(strokeLinecap);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "none" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 4 16" }
    ],
    {}
  )}><path stroke="currentColor"${add_attribute("stroke-linecap", strokeLinecap, 0)} stroke-width="3" d="M1.5 2h.01M1.5 8h.01m-.01 6h.01"></path></svg> `;
});
const ProjectCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { entry } = $$props;
  let formModal = false;
  if ($$props.entry === void 0 && $$bindings.entry && entry !== void 0)
    $$bindings.entry(entry);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Card, "Card").$$render($$result, { class: "mx-8 my-5 w-2/3 md:w-1/4" }, {}, {
      default: () => {
        return `<div class="flex justify-end">${validate_component(DotsVerticalOutline, "DotsVerticalOutline").$$render($$result, {}, {}, {})} ${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "w-36" }, {}, {
          default: () => {
            return `${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
              default: () => {
                return `Rename`;
              }
            })}`;
          }
        })}</div> <h5 class="text-2xl text-center font-semibold tracking-widest">${escape(entry.name)}</h5> <p>${escape(entry.tasks.length)} ${escape(entry.tasks.length > 1 ? "tasks" : "task")}</p> <div class="flex w-full justify-center mt-4 space-x-3 rtl:space-x-reverse lg:mt-6">${validate_component(Button, "Button").$$render(
          $$result,
          {
            href: "/project/" + entry.id,
            size: "lg",
            color: "light",
            class: "dark:text-white w-2/3 mx-auto"
          },
          {},
          {
            default: () => {
              return `Open`;
            }
          }
        )}</div>`;
      }
    })} ${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        size: "xs",
        autoclose: false,
        class: "w-full",
        open: formModal
      },
      {
        open: ($$value) => {
          formModal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<form method="POST" action="?/rename" class="flex flex-col space-y-6"><h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white" data-svelte-h="svelte-4qknnf">Rename project</h3> ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-nrcq6q">Project name</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  value: entry.name,
                  name: "project_name",
                  placeholder: "Project name",
                  required: true
                },
                {},
                {}
              )} ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "hidden",
                  name: "id",
                  value: entry.id
                },
                {},
                {}
              )}`;
            }
          })} ${validate_component(Button, "Button").$$render($$result, { type: "submit", class: "w-full" }, {}, {
            default: () => {
              return `Save changes`;
            }
          })}</form>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let formModal = false;
  let { data } = $$props;
  let projects = data.projectItems;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="flex flex-row-reverse">${validate_component(Button, "Button").$$render($$result, { size: "sm", outline: true, pill: true }, {}, {
      default: () => {
        return `Add project`;
      }
    })}</div> <div class="flex flex-col md:justify-start items-center md:flex-row md:flex-wrap mt-10">${each(projects, (project) => {
      return `${validate_component(ProjectCard, "ProjectCard").$$render($$result, { entry: project }, {}, {})}`;
    })}</div> ${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        size: "xs",
        autoclose: false,
        class: "w-full",
        open: formModal
      },
      {
        open: ($$value) => {
          formModal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<form method="POST" action="?/create" class="flex flex-col space-y-6"><h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white" data-svelte-h="svelte-y6etr0">Add new project</h3> ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-nrcq6q">Project name</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "text",
                  name: "project_name",
                  placeholder: "Project name",
                  required: true
                },
                {},
                {}
              )}`;
            }
          })} ${validate_component(Button, "Button").$$render($$result, { type: "submit", class: "w-full1" }, {}, {
            default: () => {
              return `Save project`;
            }
          })}</form>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
