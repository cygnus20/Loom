import { c as create_ssr_component, a as compute_rest_props, s as setContext, f as add_attribute, b as spread, d as escape_object, e as escape_attribute_value, g as getContext, v as validate_component, n as each, i as escape } from "../../../../chunks/ssr.js";
import { C as Card, I as Input, B as Button, L as Label } from "../../../../chunks/Input.js";
import { twJoin, twMerge } from "tailwind-merge";
import { i as is_void } from "../../../../chunks/Frame.js";
import "devalue";
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["divClass", "striped", "hoverable", "noborder", "shadow", "color", "customeColor"]);
  let { divClass = "relative overflow-x-auto" } = $$props;
  let { striped = false } = $$props;
  let { hoverable = false } = $$props;
  let { noborder = false } = $$props;
  let { shadow = false } = $$props;
  let { color = "default" } = $$props;
  let { customeColor = "" } = $$props;
  const colors = {
    default: "text-gray-500 dark:text-gray-400",
    blue: "text-blue-100 dark:text-blue-100",
    green: "text-green-100 dark:text-green-100",
    red: "text-red-100 dark:text-red-100",
    yellow: "text-yellow-100 dark:text-yellow-100",
    purple: "text-purple-100 dark:text-purple-100",
    indigo: "text-indigo-100 dark:text-indigo-100",
    pink: "text-pink-100 dark:text-pink-100",
    custom: customeColor
  };
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.striped === void 0 && $$bindings.striped && striped !== void 0)
    $$bindings.striped(striped);
  if ($$props.hoverable === void 0 && $$bindings.hoverable && hoverable !== void 0)
    $$bindings.hoverable(hoverable);
  if ($$props.noborder === void 0 && $$bindings.noborder && noborder !== void 0)
    $$bindings.noborder(noborder);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.customeColor === void 0 && $$bindings.customeColor && customeColor !== void 0)
    $$bindings.customeColor(customeColor);
  {
    setContext("striped", striped);
  }
  {
    setContext("hoverable", hoverable);
  }
  {
    setContext("noborder", noborder);
  }
  {
    setContext("color", color);
  }
  return `<div${add_attribute("class", twJoin(divClass, shadow && "shadow-md sm:rounded-lg"), 0)}><table${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("w-full text-left text-sm", colors[color], $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</table></div> `;
});
const TableBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tableBodyClass = void 0 } = $$props;
  if ($$props.tableBodyClass === void 0 && $$bindings.tableBodyClass && tableBodyClass !== void 0)
    $$bindings.tableBodyClass(tableBodyClass);
  return `<tbody${add_attribute("class", tableBodyClass, 0)}>${slots.default ? slots.default({}) : ``}</tbody> `;
});
const TableBodyCell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["tdClass"]);
  let { tdClass = "px-6 py-4 whitespace-nowrap font-medium " } = $$props;
  let color = "default";
  color = getContext("color");
  let tdClassfinal;
  if ($$props.tdClass === void 0 && $$bindings.tdClass && tdClass !== void 0)
    $$bindings.tdClass(tdClass);
  tdClassfinal = twMerge(
    tdClass,
    color === "default" ? "text-gray-900 dark:text-white" : "text-blue-50 whitespace-nowrap dark:text-blue-100",
    $$props.class
  );
  return `${((tag) => {
    return tag ? `<${$$props.onclick ? "button" : "td"}${spread(
      [
        escape_object($$restProps),
        {
          class: escape_attribute_value(tdClassfinal)
        },
        {
          role: escape_attribute_value($$props.onclick ? "button" : void 0)
        }
      ],
      {}
    )}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })($$props.onclick ? "button" : "td")} `;
});
const TableBodyRow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color"]);
  let { color = getContext("color") } = $$props;
  const colors = {
    default: "bg-white dark:bg-gray-800 dark:border-gray-700",
    blue: "bg-blue-500 border-blue-400",
    green: "bg-green-500 border-green-400",
    red: "bg-red-500 border-red-400",
    yellow: "bg-yellow-500 border-yellow-400",
    purple: "bg-purple-500 border-purple-400",
    custom: ""
  };
  const hoverColors = {
    default: "hover:bg-gray-50 dark:hover:bg-gray-600",
    blue: "hover:bg-blue-400",
    green: "hover:bg-green-400",
    red: "hover:bg-red-400",
    yellow: "hover:bg-yellow-400",
    purple: "hover:bg-purple-400",
    custom: ""
  };
  const stripColors = {
    default: "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700",
    blue: "odd:bg-blue-800 even:bg-blue-700 odd:dark:bg-blue-800 even:dark:bg-blue-700",
    green: "odd:bg-green-800 even:bg-green-700 odd:dark:bg-green-800 even:dark:bg-green-700",
    red: "odd:bg-red-800 even:bg-red-700 odd:dark:bg-red-800 even:dark:bg-red-700",
    yellow: "odd:bg-yellow-800 even:bg-yellow-700 odd:dark:bg-yellow-800 even:dark:bg-yellow-700",
    purple: "odd:bg-purple-800 even:bg-purple-700 odd:dark:bg-purple-800 even:dark:bg-purple-700",
    custom: ""
  };
  let trClass;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  trClass = twMerge([
    !getContext("noborder") && "border-b last:border-b-0",
    colors[color],
    getContext("hoverable") && hoverColors[color],
    getContext("striped") && stripColors[color],
    $$props.class
  ]);
  return `<tr${spread([escape_object($$restProps), { class: escape_attribute_value(trClass) }], {})}>${slots.default ? slots.default({}) : ``}</tr> `;
});
const TableHead = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let theadClassfinal;
  let $$restProps = compute_rest_props($$props, ["theadClass", "defaultRow"]);
  let { theadClass = "text-xs uppercase" } = $$props;
  let { defaultRow = true } = $$props;
  let color;
  color = getContext("color");
  let noborder = getContext("noborder");
  let striped = getContext("striped");
  let defaultBgColor = noborder || striped ? "" : "bg-gray-50 dark:bg-gray-700";
  const bgColors = {
    default: defaultBgColor,
    blue: "bg-blue-600",
    green: "bg-green-600",
    red: "bg-red-600",
    yellow: "bg-yellow-600",
    purple: "bg-purple-600",
    custom: ""
  };
  let textColor = color === "default" ? "text-gray-700 dark:text-gray-400" : color === "custom" ? "" : "text-white  dark:text-white";
  let borderColors = striped ? "" : color === "default" ? "border-gray-700" : color === "custom" ? "" : `border-${color}-400`;
  if ($$props.theadClass === void 0 && $$bindings.theadClass && theadClass !== void 0)
    $$bindings.theadClass(theadClass);
  if ($$props.defaultRow === void 0 && $$bindings.defaultRow && defaultRow !== void 0)
    $$bindings.defaultRow(defaultRow);
  theadClassfinal = twMerge(theadClass, textColor, striped && borderColors, bgColors[color], $$props.class);
  return `<thead${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(theadClassfinal)
      }
    ],
    {}
  )}>${defaultRow ? `<tr>${slots.default ? slots.default({}) : ``}</tr>` : `${slots.default ? slots.default({}) : ``}`}</thead> `;
});
const TableHeadCell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["padding"]);
  let { padding = "px-6 py-3" } = $$props;
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  return `<th${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(padding, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</th> `;
});
const PlusOutline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "strokeLinecap", "strokeLinejoin", "strokeWidth", "ariaLabel"]);
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
  let { strokeLinejoin = ctx.strokeLinejoin || "round" } = $$props;
  let { strokeWidth = ctx.strokeWidth || "2" } = $$props;
  let { ariaLabel = "plus outline" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.strokeLinecap === void 0 && $$bindings.strokeLinecap && strokeLinecap !== void 0)
    $$bindings.strokeLinecap(strokeLinecap);
  if ($$props.strokeLinejoin === void 0 && $$bindings.strokeLinejoin && strokeLinejoin !== void 0)
    $$bindings.strokeLinejoin(strokeLinejoin);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
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
      { viewBox: "0 0 18 18" }
    ],
    {}
  )}><path stroke="currentColor"${add_attribute("stroke-linecap", strokeLinecap, 0)}${add_attribute("stroke-linejoin", strokeLinejoin, 0)}${add_attribute("stroke-width", strokeWidth, 0)} d="M9 1v16M1 9h16"></path></svg> `;
});
const TaskCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { task } = $$props;
  if ($$props.task === void 0 && $$bindings.task && task !== void 0)
    $$bindings.task(task);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      {
        task.price = task.materials.map((t) => t.price).reduce((a, b) => a + b, 0) + +task.labourCost;
      }
    }
    $$rendered = `${validate_component(Card, "Card").$$render($$result, { size: "lg", class: "my-8 w-full" }, {}, {
      default: () => {
        return `<h4 contenteditable="true" class="mb-2 w-max text-2xl font-bold tracking-tight text-gray-900 dark:text-white" data-svelte-h="svelte-1h6eb8x">${/* @__PURE__ */ (($$value) => $$value === void 0 ? `` : $$value)(task.name)}</h4> <h6 data-svelte-h="svelte-1n6fs68">Materials</h6> ${validate_component(Table, "Table").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-2/5", padding: "px-1" }, {}, {
                  default: () => {
                    return `Material name`;
                  }
                })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-1/5", padding: "px-1" }, {}, {
                  default: () => {
                    return `Unit price`;
                  }
                })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-1/5", padding: "px-1" }, {}, {
                  default: () => {
                    return `Quantity`;
                  }
                })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { class: "w-1/5", padding: "px-1" }, {}, {
                  default: () => {
                    return `Price`;
                  }
                })}`;
              }
            })} ${validate_component(TableBody, "TableBody").$$render($$result, { tableBodyClass: "divide-y" }, {}, {
              default: () => {
                return `${each(task.materials, (material, index) => {
                  return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { tdClass: "px-1" }, {}, {
                        default: () => {
                          return `${validate_component(Input, "Input").$$render(
                            $$result,
                            { size: "sm", value: material.name },
                            {
                              value: ($$value) => {
                                material.name = $$value;
                                $$settled = false;
                              }
                            },
                            {}
                          )} `;
                        }
                      })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { tdClass: "px-1" }, {}, {
                        default: () => {
                          return `${validate_component(Input, "Input").$$render(
                            $$result,
                            {
                              type: "number",
                              size: "sm",
                              value: material.costPerUnit
                            },
                            {
                              value: ($$value) => {
                                material.costPerUnit = $$value;
                                $$settled = false;
                              }
                            },
                            {}
                          )} `;
                        }
                      })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { tdClass: "px-1" }, {}, {
                        default: () => {
                          return `${validate_component(Input, "Input").$$render(
                            $$result,
                            {
                              type: "number",
                              size: "sm",
                              value: material.quantity
                            },
                            {
                              value: ($$value) => {
                                material.quantity = $$value;
                                $$settled = false;
                              }
                            },
                            {}
                          )} `;
                        }
                      })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { tdClass: "px-1" }, {}, {
                        default: () => {
                          return `${escape(material.price)}`;
                        }
                      })} `;
                    }
                  })}`;
                })} ${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(Button, "Button").$$render(
                      $$result,
                      {
                        class: "my-3 mx-auto",
                        outline: true,
                        size: "xs"
                      },
                      {},
                      {
                        default: () => {
                          return `${validate_component(PlusOutline, "PlusOutline").$$render($$result, {}, {}, {})}`;
                        }
                      }
                    )}`;
                  }
                })}`;
              }
            })}`;
          }
        })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
          default: () => {
            return `<span data-svelte-h="svelte-95jp1u">Labour Cost</span> ${validate_component(Input, "Input").$$render(
              $$result,
              {
                type: "number",
                class: "w-1/4",
                required: true,
                value: task.labourCost
              },
              {
                value: ($$value) => {
                  task.labourCost = $$value;
                  $$settled = false;
                }
              },
              {}
            )}`;
          }
        })} <h2>${escape(task.price)}</h2>`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let tasks = data.projectItem.tasks;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${escape(data.projectItem.name)}</h1> <div class="flex flex-row-reverse">${validate_component(Button, "Button").$$render($$result, { size: "sm", outline: true, pill: true }, {}, {
      default: () => {
        return `Add task`;
      }
    })}</div> ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
      default: () => {
        return `<span data-svelte-h="svelte-1qvux73">Profit(Markup)</span> ${validate_component(Input, "Input").$$render(
          $$result,
          {
            type: "number",
            min: "0",
            max: "100",
            class: "w-1/4",
            required: true,
            value: data.projectItem.markUp
          },
          {
            value: ($$value) => {
              data.projectItem.markUp = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })} <div class="flex flex-col items-center w-full">${each(tasks, (task) => {
      return `${validate_component(TaskCard, "TaskCard").$$render(
        $$result,
        { task },
        {
          task: ($$value) => {
            task = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })}</div> <form method="post" action="?/save"><input type="hidden" name="project_id"${add_attribute("value", data.projectItem.id, 0)}> <input type="hidden" name="project_userId"${add_attribute("value", data.projectItem.userId, 0)}> <input type="hidden" name="project_name"${add_attribute("value", data.projectItem.name, 0)}> <input type="hidden" name="project_tasks"${add_attribute("value", JSON.stringify(tasks), 0)}> <input type="hidden" name="project_markUp"${add_attribute("value", data.projectItem.markUp, 0)}> ${validate_component(Button, "Button").$$render($$result, { type: "submit", class: "mt-2" }, {}, {
      default: () => {
        return `Calculate`;
      }
    })}</form> <h1 class="mt-24 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${escape(data.projectItem.price)}</h1>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
