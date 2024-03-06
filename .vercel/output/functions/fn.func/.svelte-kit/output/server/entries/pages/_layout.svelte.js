import { c as create_ssr_component, a as compute_rest_props, g as getContext, b as spread, e as escape_attribute_value, d as escape_object, f as add_attribute, h as compute_slots, i as escape, v as validate_component, j as subscribe, s as setContext } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { T as ToolbarButton, C as CloseButton } from "../../chunks/CloseButton.js";
import { i as is_void, F as Frame } from "../../chunks/Frame.js";
import { twMerge } from "tailwind-merge";
import { D as Dropdown, a as DropdownItem } from "../../chunks/DropdownItem.js";
import { w as writable } from "../../chunks/index2.js";
import "devalue";
const Cog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "variation", "viewBox", "strokeWidth", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { color = ctx.color || "currentColor" } = $$props;
  let { variation = ctx.variation || "outline" } = $$props;
  let { viewBox = ctx.viewBox || "0 0 24 24" } = $$props;
  let { strokeWidth = ctx.strokeWidth || "1.5" } = $$props;
  if (variation === "mini") {
    size = size || "20";
    viewBox = viewBox || "0 0 20 20";
  } else {
    size = size || "24";
    viewBox = viewBox || "0 0 24 24";
  }
  let { ariaLabel = "cog" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variation === void 0 && $$bindings.variation && variation !== void 0)
    $$bindings.variation(variation);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0)
    $$bindings.viewBox(viewBox);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { fill: "none" },
      { viewBox: escape_attribute_value(viewBox) },
      {
        "stroke-width": escape_attribute_value(strokeWidth)
      }
    ],
    {}
  )}>${variation === "outline" ? `<path d="M4.50073 11.9993C4.50073 16.1414 7.8586 19.4993 12.0007 19.4993C16.1429 19.4993 19.5007 16.1414 19.5007 11.9993M4.50073 11.9993C4.50073 7.85712 7.8586 4.49925 12.0007 4.49925C16.1429 4.49926 19.5007 7.85712 19.5007 11.9993M4.50073 11.9993L3.00073 11.9993M19.5007 11.9993L21.0007 11.9993M19.5007 11.9993L12.0007 11.9993M3.54329 15.0774L4.95283 14.5644M19.0482 9.43411L20.4578 8.92108M5.1062 17.785L6.25527 16.8208M17.7459 7.17897L18.895 6.21479M7.50064 19.7943L8.25064 18.4952M15.7506 5.50484L16.5006 4.2058M10.4378 20.8633L10.6983 19.386M13.303 4.61393L13.5635 3.13672M13.5635 20.8633L13.303 19.3861M10.6983 4.61397L10.4378 3.13676M16.5007 19.7941L15.7507 18.4951M7.50068 4.20565L12.0007 11.9993M18.8952 17.7843L17.7461 16.8202M6.25542 7.17835L5.10635 6.21417M20.458 15.0776L19.0485 14.5646M4.95308 9.43426L3.54354 8.92123M12.0007 11.9993L8.25073 18.4944"${add_attribute("stroke", color, 0)}${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="round" stroke-linejoin="round"></path>` : `${variation === "mini" ? `<path d="M13.0242 9.24999C13.4944 9.24999 13.8513 8.81719 13.6614 8.38695C13.0412 6.9812 11.6352 6 10 6C9.85376 6 9.70936 6.00785 9.56719 6.02314C9.09929 6.07349 8.90249 6.59904 9.13779 7.00659L10.2165 8.87499C10.3505 9.10704 10.5981 9.24999 10.866 9.24999L13.0242 9.24999Z"${add_attribute("fill", color, 0)}></path> <path d="M7.83948 7.75785C7.60411 7.35018 7.05027 7.25778 6.77194 7.63742C6.28661 8.29942 6 9.11624 6 10C6 10.8838 6.28662 11.7006 6.77198 12.3626C7.05031 12.7423 7.60415 12.6499 7.83952 12.2422L8.91751 10.3751C9.05149 10.143 9.05149 9.85711 8.91751 9.62506L7.83948 7.75785Z"${add_attribute("fill", color, 0)}></path> <path d="M9.13785 12.9934C8.90255 13.401 9.09936 13.9265 9.56726 13.9769C9.70941 13.9922 9.85379 14 10 14C11.6352 14 13.0412 13.0188 13.6614 11.613C13.8513 11.1828 13.4944 10.75 13.0242 10.75H10.8661C10.5982 10.75 10.3506 10.8929 10.2166 11.125L9.13785 12.9934Z"${add_attribute("fill", color, 0)}></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1295 4.34724L14.7744 3.23028C14.9815 2.87156 14.8586 2.41286 14.4999 2.20576C14.1412 1.99865 13.6825 2.12156 13.4754 2.48028L12.8311 3.59615C12.1832 3.30927 11.4835 3.11784 10.75 3.03971V1.75C10.75 1.33579 10.4142 1 10 1C9.58579 1 9.25 1.33579 9.25 1.75V3.03971C8.51649 3.11784 7.81683 3.30927 7.16886 3.59616L6.52462 2.4803C6.31752 2.12158 5.85882 1.99867 5.5001 2.20578C5.14139 2.41289 5.01848 2.87158 5.22559 3.2303L5.87046 4.34725C5.28784 4.7736 4.77359 5.28784 4.34725 5.87046L3.23009 5.22547C2.87137 5.01836 2.41267 5.14127 2.20557 5.49999C1.99846 5.85871 2.12137 6.3174 2.48009 6.52451L3.59615 7.16887C3.30927 7.81683 3.11784 8.51649 3.03971 9.25H1.75C1.33579 9.25 1 9.58579 1 10C1 10.4142 1.33579 10.75 1.75 10.75H3.03971C3.11784 11.4835 3.30926 12.1832 3.59614 12.8311L2.48009 13.4755C2.12137 13.6826 1.99846 14.1413 2.20557 14.5C2.41267 14.8587 2.87137 14.9816 3.23009 14.7745L4.34723 14.1295C4.77355 14.7121 5.28775 15.2263 5.87031 15.6526L5.22538 16.7697C5.01827 17.1284 5.14118 17.5871 5.4999 17.7942C5.85861 18.0013 6.31731 17.8784 6.52441 17.5197L7.1687 16.4038C7.81671 16.6907 8.51643 16.8822 9.25 16.9603V18.25C9.25 18.6642 9.58579 19 10 19C10.4142 19 10.75 18.6642 10.75 18.25V16.9603C11.4836 16.8822 12.1833 16.6907 12.8313 16.4038L13.4756 17.5197C13.6827 17.8784 14.1414 18.0013 14.5001 17.7942C14.8588 17.5871 14.9817 17.1284 14.7746 16.7697L14.1297 15.6526C14.7122 15.2263 15.2264 14.7121 15.6527 14.1296L16.7698 14.7745C17.1285 14.9816 17.5872 14.8587 17.7943 14.5C18.0014 14.1413 17.8785 13.6826 17.5198 13.4755L16.4038 12.8312C16.6907 12.1832 16.8822 11.4835 16.9603 10.75H18.25C18.6642 10.75 19 10.4142 19 10C19 9.58579 18.6642 9.25 18.25 9.25H16.9603C16.8822 8.51646 16.6907 7.81678 16.4038 7.16879L17.5198 6.52451C17.8785 6.3174 18.0014 5.85871 17.7943 5.49999C17.5872 5.14127 17.1285 5.01836 16.7698 5.22547L15.6527 5.8704C15.2264 5.2878 14.7121 4.77358 14.1295 4.34724ZM10 4.5C9.0112 4.5 8.08334 4.76094 7.28153 5.2177C7.27126 5.22431 7.26079 5.2307 7.2501 5.23687C7.23978 5.24283 7.22937 5.24852 7.21889 5.25393C6.40668 5.7309 5.72776 6.4104 5.25148 7.22307C5.24674 7.2321 5.2418 7.24107 5.23666 7.24999C5.2313 7.25926 5.22578 7.26837 5.2201 7.27733C4.76185 8.0801 4.5 9.00947 4.5 10C4.5 10.9904 4.76179 11.9197 5.21995 12.7224C5.22569 12.7314 5.23126 12.7406 5.23666 12.75C5.24185 12.759 5.24683 12.768 5.25161 12.7772C5.72819 13.5903 6.40765 14.27 7.2205 14.747C7.23036 14.7521 7.24017 14.7575 7.2499 14.7631C7.26 14.769 7.26992 14.775 7.27965 14.7812C8.08189 15.2387 9.01042 15.5 10 15.5C10.9897 15.5 11.9184 15.2386 12.7207 14.781C12.7303 14.7749 12.7401 14.7689 12.7501 14.7632C12.7597 14.7576 12.7694 14.7523 12.7792 14.7472C13.5913 14.2707 14.2704 13.5918 14.7469 12.7797C14.7521 12.7697 14.7575 12.7598 14.7632 12.75C14.7691 12.7398 14.7751 12.7298 14.7814 12.72C15.2387 11.9179 15.5 10.9894 15.5 10C15.5 9.01046 15.2387 8.08196 14.7813 7.27974C14.7751 7.27001 14.769 7.26009 14.7632 7.24999C14.7576 7.24025 14.7522 7.23044 14.7471 7.22057C14.2708 6.40891 13.5923 5.73024 12.7808 5.25375C12.7704 5.24838 12.7601 5.24275 12.7499 5.23685C12.7393 5.23074 12.7289 5.22441 12.7188 5.21788C11.9169 4.761 10.9889 4.5 10 4.5Z"${add_attribute("fill", color, 0)}></path>` : `<path d="M17.0039 10.4069C17.1423 10.8419 16.7882 11.2494 16.3317 11.2494H12.8667C12.5988 11.2494 12.3512 11.1064 12.2172 10.8744L10.4845 7.87349C10.2561 7.47789 10.4321 6.96735 10.8784 6.87021C11.2398 6.79157 11.6151 6.75015 12 6.75015C14.344 6.75015 16.3293 8.28635 17.0039 10.4069Z"${add_attribute("fill", color, 0)}></path> <path d="M8.11938 8.46409C8.42728 8.12639 8.95767 8.22903 9.18619 8.62478L10.9182 11.6244C11.0522 11.8564 11.0522 12.1424 10.9182 12.3744L9.18577 15.375C8.95726 15.7708 8.42679 15.8735 8.11891 15.5357C7.26853 14.6027 6.75 13.362 6.75 12.0001C6.75 10.6381 7.26872 9.39712 8.11938 8.46409Z"${add_attribute("fill", color, 0)}></path> <path d="M10.8778 17.1299C10.4315 17.0327 10.2555 16.5223 10.4839 16.1267L12.2172 13.1244C12.3512 12.8923 12.5988 12.7494 12.8668 12.7494H16.3322C16.7886 12.7494 17.1426 13.1567 17.0044 13.5917C16.3304 15.7131 14.3447 17.2501 12 17.2501C11.6148 17.2501 11.2393 17.2087 10.8778 17.1299Z"${add_attribute("fill", color, 0)}></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M21.0007 12.7494C21.4149 12.7494 21.7507 12.4136 21.7507 11.9994C21.7507 11.5852 21.4149 11.2494 21.0007 11.2494H20.2171C20.1753 10.7852 20.095 10.3322 19.9795 9.89341L20.7143 9.62597C21.1035 9.4843 21.3042 9.05392 21.1625 8.66469C21.0209 8.27545 20.5905 8.07476 20.2012 8.21643L19.4664 8.4839C19.2695 8.06647 19.0386 7.66823 18.7773 7.29273L19.3771 6.78945C19.6944 6.5232 19.7358 6.05013 19.4695 5.73282C19.2033 5.41552 18.7302 5.37413 18.4129 5.64038L17.8126 6.14409C17.4869 5.82081 17.1344 5.52452 16.7588 5.25884L17.1502 4.58093C17.3573 4.22221 17.2344 3.76351 16.8756 3.55641C16.5169 3.3493 16.0582 3.47221 15.8511 3.83093L15.4604 4.50766C15.0465 4.31618 14.614 4.15801 14.1664 4.03656L14.3021 3.26708C14.374 2.85916 14.1016 2.47017 13.6937 2.39824C13.2858 2.32631 12.8968 2.59869 12.8249 3.00661L12.6889 3.77767C12.462 3.75894 12.2325 3.74938 12.0007 3.74938C11.769 3.74938 11.5394 3.75895 11.3124 3.77773L11.1764 3.00665C11.1045 2.59873 10.7155 2.32635 10.3076 2.39828C9.89966 2.47021 9.62728 2.8592 9.69921 3.26712L9.83492 4.0368C9.38749 4.15824 8.95506 4.31639 8.54113 4.50783L8.15018 3.83075C7.94306 3.47204 7.48436 3.34915 7.12565 3.55627C6.76694 3.76339 6.64405 4.22209 6.85117 4.5808L7.24273 5.25893C6.86722 5.52447 6.51483 5.82066 6.18921 6.14386L5.58845 5.63976C5.27114 5.37351 4.79807 5.4149 4.53182 5.7322C4.26557 6.04951 4.30696 6.52257 4.62426 6.78883L5.22448 7.29247C4.96309 7.66809 4.73209 8.06649 4.53509 8.48412L3.80006 8.21659C3.41082 8.07492 2.98044 8.27561 2.83877 8.66484C2.6971 9.05407 2.89779 9.48446 3.28703 9.62612L4.02196 9.89362C3.90647 10.3323 3.8262 10.7853 3.78437 11.2494H3.00073C2.58652 11.2494 2.25073 11.5852 2.25073 11.9994C2.25073 12.4136 2.58652 12.7494 3.00073 12.7494H3.78437C3.82619 13.2135 3.90644 13.6665 4.02192 14.1052L3.28678 14.3728C2.89755 14.5145 2.69685 14.9448 2.83852 15.3341C2.98019 15.7233 3.41058 15.924 3.79981 15.7823L4.53502 15.5147C4.73205 15.9324 4.9631 16.331 5.22461 16.7067L4.62411 17.2106C4.30681 17.4768 4.26542 17.9499 4.53167 18.2672C4.79792 18.5845 5.27099 18.6259 5.58829 18.3596L6.18941 17.8552C6.51507 18.1784 6.86754 18.4747 7.2432 18.7403L6.85112 19.4194C6.64401 19.7781 6.76692 20.2368 7.12564 20.4439C7.48436 20.651 7.94305 20.5281 8.15016 20.1694L8.54161 19.4914C8.9554 19.6827 9.38772 19.8408 9.83514 19.9622L9.6992 20.7332C9.62727 21.1411 9.89965 21.5301 10.3076 21.602C10.7155 21.6739 11.1045 21.4015 11.1764 20.9936L11.3126 20.2211C11.5395 20.2398 11.769 20.2494 12.0007 20.2494C12.2324 20.2494 12.4618 20.2398 12.6887 20.2211L12.8249 20.9937C12.8968 21.4016 13.2858 21.674 13.6937 21.602C14.1016 21.5301 14.374 21.1411 14.3021 20.7332L14.1662 19.9623C14.6136 19.8409 15.046 19.6828 15.4598 19.4914L15.8512 20.1692C16.0583 20.528 16.517 20.6509 16.8757 20.4438C17.2344 20.2366 17.3573 19.778 17.1502 19.4192L16.7582 18.7403C17.134 18.4746 17.4866 18.1783 17.8123 17.8549L18.4131 18.359C18.7304 18.6253 19.2034 18.5839 19.4697 18.2666C19.7359 17.9493 19.6946 17.4762 19.3772 17.2099L18.7771 16.7063C19.0385 16.3308 19.2694 15.9324 19.4664 15.5149L20.2015 15.7825C20.5907 15.9242 21.0211 15.7235 21.1628 15.3342C21.3044 14.945 21.1038 14.5146 20.7145 14.3729L19.9795 14.1054C20.095 13.6666 20.1753 13.2135 20.2171 12.7494H21.0007ZM18.3435 9.69075C18.3374 9.67412 18.332 9.65741 18.3272 9.64066C18.0593 8.92262 17.6728 8.26243 17.1913 7.68399C17.1846 7.67656 17.1779 7.66895 17.1714 7.66119C17.165 7.65358 17.1588 7.64588 17.1528 7.6381C16.6625 7.05954 16.0766 6.56465 15.4194 6.17787C15.4046 6.17061 15.3901 6.16281 15.3756 6.15448C15.3608 6.14593 15.3464 6.13695 15.3324 6.12756C14.6882 5.76124 13.9778 5.49788 13.2236 5.35987C13.2067 5.35805 13.1897 5.35566 13.1728 5.35266C13.1563 5.34976 13.1401 5.34635 13.1241 5.34244C12.7588 5.28123 12.3835 5.24938 12.0007 5.24938C11.6183 5.24938 11.2435 5.28112 10.8788 5.34208C10.8623 5.34616 10.8455 5.34971 10.8285 5.3527C10.8109 5.3558 10.7934 5.35826 10.7759 5.3601C10.005 5.5013 9.28044 5.77342 8.62548 6.15241C7.94757 6.54468 7.34445 7.05116 6.84231 7.64545C6.83827 7.65052 6.83415 7.65556 6.82995 7.66057C6.82783 7.6631 6.82568 7.66562 6.82353 7.66813C6.82127 7.67075 6.819 7.67335 6.81671 7.67593C6.33198 8.2565 5.94308 8.91961 5.67409 9.64102C5.66929 9.65771 5.66388 9.67434 5.65785 9.6909C5.65182 9.70747 5.64527 9.72369 5.63822 9.73956C5.38727 10.4462 5.25073 11.2069 5.25073 11.9994C5.25073 12.7937 5.38795 13.556 5.63997 14.2639C5.64626 14.2783 5.65215 14.293 5.6576 14.308C5.66305 14.323 5.66799 14.338 5.67243 14.3531C6.21998 15.8246 7.26613 17.0536 8.60555 17.8346C8.60934 17.8367 8.61311 17.8387 8.61688 17.8408C8.6198 17.8425 8.62272 17.8441 8.62564 17.8458C8.63265 17.8499 8.63958 17.854 8.64641 17.8583C9.3043 18.2357 10.0318 18.5056 10.8049 18.6438C10.8128 18.6449 10.8207 18.6462 10.8285 18.6476C10.8358 18.6489 10.8431 18.6503 10.8504 18.6517C11.2242 18.7159 11.6086 18.7494 12.0007 18.7494C12.3929 18.7494 12.7773 18.7159 13.1512 18.6517C13.1584 18.6503 13.1655 18.6489 13.1728 18.6476C13.1805 18.6462 13.1883 18.645 13.1961 18.6439C13.9675 18.506 14.6935 18.2371 15.3503 17.861C15.3586 17.8557 15.3671 17.8506 15.3757 17.8457C15.3839 17.8409 15.3922 17.8363 15.4006 17.8319C16.07 17.4409 16.666 16.9379 17.163 16.3486L17.1716 16.3382L17.1808 16.3274C17.6679 15.745 18.0587 15.0792 18.3285 14.3546C18.333 14.339 18.3381 14.3236 18.3437 14.3082C18.3493 14.2927 18.3554 14.2776 18.3619 14.2627C18.6137 13.5552 18.7507 12.7933 18.7507 11.9994C18.7507 11.2068 18.6141 10.4462 18.3632 9.73969C18.3561 9.72373 18.3495 9.70741 18.3435 9.69075Z"${add_attribute("fill", color, 0)}></path>`}`}</svg> `;
});
const Folder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "variation", "viewBox", "strokeWidth", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { color = ctx.color || "currentColor" } = $$props;
  let { variation = ctx.variation || "outline" } = $$props;
  let { viewBox = ctx.viewBox || "0 0 24 24" } = $$props;
  let { strokeWidth = ctx.strokeWidth || "1.5" } = $$props;
  if (variation === "mini") {
    size = size || "20";
    viewBox = viewBox || "0 0 20 20";
  } else {
    size = size || "24";
    viewBox = viewBox || "0 0 24 24";
  }
  let { ariaLabel = "folder" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variation === void 0 && $$bindings.variation && variation !== void 0)
    $$bindings.variation(variation);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0)
    $$bindings.viewBox(viewBox);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { fill: "none" },
      { viewBox: escape_attribute_value(viewBox) },
      {
        "stroke-width": escape_attribute_value(strokeWidth)
      }
    ],
    {}
  )}>${variation === "outline" ? `<path d="M2.25 12.75V12C2.25 10.7574 3.25736 9.75 4.5 9.75H19.5C20.7426 9.75 21.75 10.7574 21.75 12V12.75M13.0607 6.31066L10.9393 4.18934C10.658 3.90804 10.2765 3.75 9.87868 3.75H4.5C3.25736 3.75 2.25 4.75736 2.25 6V18C2.25 19.2426 3.25736 20.25 4.5 20.25H19.5C20.7426 20.25 21.75 19.2426 21.75 18V9C21.75 7.75736 20.7426 6.75 19.5 6.75H14.1213C13.7235 6.75 13.342 6.59197 13.0607 6.31066Z"${add_attribute("stroke", color, 0)}${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="round" stroke-linejoin="round"></path>` : `${variation === "mini" ? `<path d="M3.75 3C2.7835 3 2 3.7835 2 4.75V8.01091C2.50515 7.6875 3.10568 7.5 3.75 7.5H16.25C16.8943 7.5 17.4949 7.6875 18 8.01091V6.75C18 5.7835 17.2165 5 16.25 5H11.4142C11.3479 5 11.2843 4.97366 11.2374 4.92678L9.82322 3.51256C9.49503 3.18437 9.04992 3 8.58579 3H3.75Z"${add_attribute("fill", color, 0)}></path> <path d="M3.75 9C2.7835 9 2 9.7835 2 10.75V15.25C2 16.2165 2.7835 17 3.75 17H16.25C17.2165 17 18 16.2165 18 15.25V10.75C18 9.7835 17.2165 9 16.25 9H3.75Z"${add_attribute("fill", color, 0)}></path>` : `<path d="M19.5 21C21.1569 21 22.5 19.6569 22.5 18V13.5C22.5 11.8431 21.1569 10.5 19.5 10.5H4.5C2.84315 10.5 1.5 11.8431 1.5 13.5V18C1.5 19.6569 2.84315 21 4.5 21H19.5Z"${add_attribute("fill", color, 0)}></path> <path d="M1.5 10.1458V6C1.5 4.34315 2.84315 3 4.5 3H9.87868C10.4754 3 11.0477 3.23705 11.4697 3.65901L13.591 5.78033C13.7316 5.92098 13.9224 6 14.1213 6H19.5C21.1569 6 22.5 7.34315 22.5 9V10.1458C21.7039 9.43328 20.6525 9 19.5 9H4.5C3.34747 9 2.29613 9.43328 1.5 10.1458Z"${add_attribute("fill", color, 0)}></path>`}`}</svg> `;
});
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "color", "variation", "viewBox", "strokeWidth", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  let { size = ctx.size || "24" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { color = ctx.color || "currentColor" } = $$props;
  let { variation = ctx.variation || "outline" } = $$props;
  let { viewBox = ctx.viewBox || "0 0 24 24" } = $$props;
  let { strokeWidth = ctx.strokeWidth || "1.5" } = $$props;
  if (variation === "mini") {
    size = size || "20";
    viewBox = viewBox || "0 0 20 20";
  } else {
    size = size || "24";
    viewBox = viewBox || "0 0 24 24";
  }
  let { ariaLabel = "home" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variation === void 0 && $$bindings.variation && variation !== void 0)
    $$bindings.variation(variation);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0)
    $$bindings.viewBox(viewBox);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object($$restProps),
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { fill: "none" },
      { viewBox: escape_attribute_value(viewBox) },
      {
        "stroke-width": escape_attribute_value(strokeWidth)
      }
    ],
    {}
  )}>${variation === "outline" ? `<path d="M2.25 11.9998L11.2045 3.04533C11.6438 2.60599 12.3562 2.60599 12.7955 3.04532L21.75 11.9998M4.5 9.74983V19.8748C4.5 20.4961 5.00368 20.9998 5.625 20.9998H9.75V16.1248C9.75 15.5035 10.2537 14.9998 10.875 14.9998H13.125C13.7463 14.9998 14.25 15.5035 14.25 16.1248V20.9998H18.375C18.9963 20.9998 19.5 20.4962 19.5 19.8748V9.74983M8.25 20.9998H16.5"${add_attribute("stroke", color, 0)}${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="round" stroke-linejoin="round"></path>` : `${variation === "mini" ? `<path fill-rule="evenodd" clip-rule="evenodd" d="M9.29292 2.29289C9.68345 1.90237 10.3166 1.90237 10.7071 2.29289L17.7071 9.29289C17.9931 9.57889 18.0787 10.009 17.9239 10.3827C17.7691 10.7564 17.4045 11 17 11H16V17C16 17.5523 15.5523 18 15 18H13C12.4477 18 12 17.5523 12 17V14C12 13.4477 11.5523 13 11 13H9.00003C8.44774 13 8.00003 13.4477 8.00003 14V17C8.00003 17.5523 7.55231 18 7.00003 18H5.00003C4.44774 18 4.00003 17.5523 4.00003 17V11H3.00003C2.59557 11 2.23093 10.7564 2.07615 10.3827C1.92137 10.009 2.00692 9.57889 2.29292 9.29289L9.29292 2.29289Z"${add_attribute("fill", color, 0)}></path>` : `<path d="M11.4697 3.84076C11.7626 3.54787 12.2374 3.54787 12.5303 3.84076L21.2197 12.5301C21.5126 12.823 21.9874 12.823 22.2803 12.5301C22.5732 12.2372 22.5732 11.7623 22.2803 11.4694L13.591 2.7801C12.7123 1.90142 11.2877 1.90142 10.409 2.7801L1.71967 11.4694C1.42678 11.7623 1.42678 12.2372 1.71967 12.5301C2.01256 12.823 2.48744 12.823 2.78033 12.5301L11.4697 3.84076Z"${add_attribute("fill", color, 0)}></path> <path d="M12 5.43176L20.159 13.5908C20.1887 13.6205 20.2191 13.6492 20.25 13.6769V19.8748C20.25 20.9103 19.4105 21.7498 18.375 21.7498H15C14.5858 21.7498 14.25 21.414 14.25 20.9998V16.4998C14.25 16.0856 13.9142 15.7498 13.5 15.7498H10.5C10.0858 15.7498 9.75 16.0856 9.75 16.4998V20.9998C9.75 21.414 9.41421 21.7498 9 21.7498H5.625C4.58947 21.7498 3.75 20.9103 3.75 19.8748V13.6769C3.78093 13.6492 3.81127 13.6205 3.84099 13.5908L12 5.43176Z"${add_attribute("fill", color, 0)}></path>`}`}</svg> `;
});
function quintOut(t) {
  return --t * t * t * t * t + 1;
}
function sineIn(t) {
  const v = Math.cos(t * Math.PI * 0.5);
  if (Math.abs(v) < 1e-14)
    return 1;
  else
    return 1 - v;
}
const Placeholder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { rounded = false } = $$props;
  let { border = false } = $$props;
  let { size = "md" } = $$props;
  const sizes = {
    xs: "w-6 h-6",
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-20 h-20",
    xl: "w-36 h-36"
  };
  const borderedSizes = {
    xs: "w-4 h-4",
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-16 h-16",
    xl: "w-32 h-32"
  };
  let svgClass = twMerge("text-gray-400 bg-gray-100 dark:bg-gray-600", rounded ? "rounded" : "rounded-full", border ? borderedSizes[size] : sizes[size], $$props.class);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<svg${add_attribute("class", svgClass, 0)} fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg> `;
});
const Indicator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { color = "gray" } = $$props;
  let { rounded = false } = $$props;
  let { size = "md" } = $$props;
  let { border = false } = $$props;
  let { placement = void 0 } = $$props;
  let { offset = true } = $$props;
  const colors = {
    gray: "bg-gray-200",
    dark: "bg-gray-900 dark:bg-gray-700",
    blue: "bg-blue-600",
    orange: "bg-orange-600",
    green: "bg-green-500",
    red: "bg-red-500",
    purple: "bg-purple-500",
    indigo: "bg-indigo-500",
    yellow: "bg-yellow-300",
    teal: "bg-teal-500",
    none: ""
  };
  const sizes = {
    xs: "w-2 h-2",
    sm: "w-2.5 h-2.5",
    md: "w-3 h-3",
    lg: "w-3.5 h-3.5",
    xl: "w-6 h-6"
  };
  const placements = {
    // top
    "top-left": "top-0 start-0",
    "top-center": "top-0 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 rtl:translate-x-1/2",
    "top-right": "top-0 end-0",
    // center
    "center-left": "top-1/2 -translate-y-1/2 start-0",
    center: "top-1/2 -translate-y-1/2 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 rtl:translate-x-1/2",
    "center-right": "top-1/2 -translate-y-1/2 end-0",
    // bottom
    "bottom-left": "bottom-0 start-0",
    "bottom-center": "bottom-0 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 rtl:translate-x-1/2",
    "bottom-right": "bottom-0 end-0"
  };
  const offsets = {
    // top
    "top-left": "-translate-x-1/3 rtl:translate-x-1/3 -translate-y-1/3",
    "top-center": "-translate-y-1/3",
    "top-right": "translate-x-1/3 rtl:-translate-x-1/3 -translate-y-1/3",
    // center
    "center-left": "-translate-x-1/3 rtl:translate-x-1/3",
    center: "",
    "center-right": "translate-x-1/3 rtl:-translate-x-1/3",
    // bottom
    "bottom-left": "-translate-x-1/3 rtl:translate-x-1/3 translate-y-1/3",
    "bottom-center": "translate-y-1/3",
    "bottom-right": "translate-x-1/3 rtl:-translate-x-1/3 translate-y-1/3"
  };
  let dotClass;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  dotClass = twMerge("flex-shrink-0", rounded ? "rounded" : "rounded-full", border && "border-2 border-white dark:border-gray-800", sizes[size], colors[color], $$slots.default && "inline-flex items-center justify-center", placement && "absolute " + placements[placement], placement && offset && offsets[placement], $$props.class);
  return `<div${add_attribute("class", dotClass, 0)}>${slots.default ? slots.default({}) : ``}</div> `;
});
const Avatar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["src", "href", "rounded", "border", "stacked", "dot", "alt", "size"]);
  let $$slots = compute_slots(slots);
  let { src = "" } = $$props;
  let { href = void 0 } = $$props;
  let { rounded = false } = $$props;
  let { border = false } = $$props;
  let { stacked = false } = $$props;
  let { dot = void 0 } = $$props;
  let { alt = "" } = $$props;
  let { size = "md" } = $$props;
  const sizes = {
    xs: "w-6 h-6",
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-20 h-20",
    xl: "w-36 h-36"
  };
  let avatarClass;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.stacked === void 0 && $$bindings.stacked && stacked !== void 0)
    $$bindings.stacked(stacked);
  if ($$props.dot === void 0 && $$bindings.dot && dot !== void 0)
    $$bindings.dot(dot);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  dot = dot && {
    placement: "top-right",
    color: "gray",
    size: "lg",
    ...dot
  };
  avatarClass = twMerge(rounded ? "rounded" : "rounded-full", border && "p-1 ring-2 ring-gray-300 dark:ring-gray-500", sizes[size], stacked && "border-2 -ms-4 border-white dark:border-gray-800", "bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300", $$props.class);
  return `${!src || !!href || $$slots.default || dot ? `${((tag) => {
    return tag ? `<${href ? "a" : "div"}${spread(
      [
        { href: escape_attribute_value(href) },
        escape_object($$restProps),
        {
          class: "relative flex justify-center items-center " + escape(avatarClass, true)
        }
      ],
      {}
    )}>${is_void(tag) ? "" : `${src ? `<img${add_attribute("alt", alt, 0)}${add_attribute("src", src, 0)}${add_attribute("class", rounded ? "rounded" : "rounded-full", 0)}>` : `${slots.default ? slots.default({}) : `${validate_component(Placeholder, "AvatarPlaceholder").$$render(
      $$result,
      {
        rounded,
        size,
        border,
        class: twMerge($$props.classPlaceholder)
      },
      {},
      {}
    )}`}`} ${dot ? `${validate_component(Indicator, "Indicator").$$render($$result, Object.assign({}, { border: true }, { offset: rounded }, dot), {}, {})}` : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "div")}` : `<img${spread(
    [
      { alt: escape_attribute_value(alt) },
      { src: escape_attribute_value(src) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(avatarClass)
      }
    ],
    {}
  )}>`} `;
});
const Drawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "activateClickOutside",
    "hidden",
    "position",
    "leftOffset",
    "rightOffset",
    "topOffset",
    "bottomOffset",
    "width",
    "backdrop",
    "bgColor",
    "bgOpacity",
    "placement",
    "id",
    "divClass",
    "transitionParams",
    "transitionType"
  ]);
  let { activateClickOutside = true } = $$props;
  let { hidden = true } = $$props;
  let { position = "fixed" } = $$props;
  let { leftOffset = "inset-y-0 start-0" } = $$props;
  let { rightOffset = "inset-y-0 end-0" } = $$props;
  let { topOffset = "inset-x-0 top-0" } = $$props;
  let { bottomOffset = "inset-x-0 bottom-0" } = $$props;
  let { width = "w-80" } = $$props;
  let { backdrop: backdrop2 = true } = $$props;
  let { bgColor = "bg-gray-900" } = $$props;
  let { bgOpacity = "bg-opacity-75" } = $$props;
  let { placement = "left" } = $$props;
  let { id = "drawer-example" } = $$props;
  let { divClass: divClass2 = "overflow-y-auto z-50 p-4 bg-white dark:bg-gray-800" } = $$props;
  let { transitionParams = {} } = $$props;
  let { transitionType = "fly" } = $$props;
  const placements = {
    left: leftOffset,
    right: rightOffset,
    top: topOffset,
    bottom: bottomOffset
  };
  let backdropDivClass = twMerge("fixed top-0 start-0 z-50 w-full h-full", backdrop2 && bgColor, backdrop2 && bgOpacity);
  if ($$props.activateClickOutside === void 0 && $$bindings.activateClickOutside && activateClickOutside !== void 0)
    $$bindings.activateClickOutside(activateClickOutside);
  if ($$props.hidden === void 0 && $$bindings.hidden && hidden !== void 0)
    $$bindings.hidden(hidden);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.leftOffset === void 0 && $$bindings.leftOffset && leftOffset !== void 0)
    $$bindings.leftOffset(leftOffset);
  if ($$props.rightOffset === void 0 && $$bindings.rightOffset && rightOffset !== void 0)
    $$bindings.rightOffset(rightOffset);
  if ($$props.topOffset === void 0 && $$bindings.topOffset && topOffset !== void 0)
    $$bindings.topOffset(topOffset);
  if ($$props.bottomOffset === void 0 && $$bindings.bottomOffset && bottomOffset !== void 0)
    $$bindings.bottomOffset(bottomOffset);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.backdrop === void 0 && $$bindings.backdrop && backdrop2 !== void 0)
    $$bindings.backdrop(backdrop2);
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0)
    $$bindings.bgColor(bgColor);
  if ($$props.bgOpacity === void 0 && $$bindings.bgOpacity && bgOpacity !== void 0)
    $$bindings.bgOpacity(bgOpacity);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass2 !== void 0)
    $$bindings.divClass(divClass2);
  if ($$props.transitionParams === void 0 && $$bindings.transitionParams && transitionParams !== void 0)
    $$bindings.transitionParams(transitionParams);
  if ($$props.transitionType === void 0 && $$bindings.transitionType && transitionType !== void 0)
    $$bindings.transitionType(transitionType);
  return `${!hidden ? `${backdrop2 && activateClickOutside ? `<div role="presentation"${add_attribute("class", backdropDivClass, 0)}></div>` : `${backdrop2 && !activateClickOutside ? `<div role="presentation"${add_attribute("class", backdropDivClass, 0)}></div>` : ``}`} <div${spread(
    [
      { id: escape_attribute_value(id) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(divClass2, width, position, placements[placement], $$props.class))
      },
      { tabindex: "-1" },
      {
        "aria-controls": escape_attribute_value(id)
      },
      {
        "aria-labelledby": escape_attribute_value(id)
      }
    ],
    {}
  )}>${slots.default ? slots.default({ hidden }) : ``}</div>` : ``} `;
});
const DropdownDivider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["divClass"]);
  let { divClass: divClass2 = "my-1 h-px bg-gray-100 dark:bg-gray-600" } = $$props;
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass2 !== void 0)
    $$bindings.divClass(divClass2);
  return `<div${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(divClass2, $$props.class))
      }
    ],
    {}
  )}></div> `;
});
const DropdownHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["divClass", "divider"]);
  let { divClass: divClass2 = "py-2 px-4 text-gray-700 dark:text-white" } = $$props;
  let { divider = true } = $$props;
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass2 !== void 0)
    $$bindings.divClass(divClass2);
  if ($$props.divider === void 0 && $$bindings.divider && divider !== void 0)
    $$bindings.divider(divider);
  return `<div${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(divClass2, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div> ${divider ? `${validate_component(DropdownDivider, "DropdownDivider").$$render($$result, {}, {}, {})}` : ``} `;
});
const NavContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { fluid = false } = $$props;
  if ($$props.fluid === void 0 && $$bindings.fluid && fluid !== void 0)
    $$bindings.fluid(fluid);
  return `<div${add_attribute("class", twMerge("mx-auto flex flex-wrap justify-between items-center ", fluid ? "w-full" : "container", $$props.class), 0)}>${slots.default ? slots.default({}) : ``}</div> `;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["fluid"]);
  let $hidden, $$unsubscribe_hidden;
  let { fluid = false } = $$props;
  let hidden = writable(true);
  $$unsubscribe_hidden = subscribe(hidden, (value) => $hidden = value);
  setContext("navHidden", hidden);
  let toggle = () => hidden.update((hidden2) => !hidden2);
  if ($$props.fluid === void 0 && $$bindings.fluid && fluid !== void 0)
    $$bindings.fluid(fluid);
  {
    {
      $$restProps.color = $$restProps.color ?? "navbar";
    }
  }
  $$unsubscribe_hidden();
  return `${validate_component(Frame, "Frame").$$render(
    $$result,
    Object.assign({}, { tag: "nav" }, $$restProps, {
      class: twMerge("px-2 sm:px-4 py-2.5 w-full", $$props.class)
    }),
    {},
    {
      default: () => {
        return `${validate_component(NavContainer, "NavContainer").$$render($$result, { fluid }, {}, {
          default: () => {
            return `${slots.default ? slots.default({ hidden: $hidden, toggle, NavContainer }) : ``}`;
          }
        })}`;
      }
    }
  )} `;
});
const NavBrand = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href"]);
  let { href = "" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  return `<a${spread(
    [
      { href: escape_attribute_value(href) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("flex items-center", $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a> `;
});
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "color", "variation", "ariaLabel"]);
  let { size = "24" } = $$props;
  let { color = "currentColor" } = $$props;
  let { variation = "outline" } = $$props;
  let { ariaLabel = "bars 3" } = $$props;
  let viewBox;
  let svgpath;
  let svgoutline = `<path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path> `;
  let svgsolid = `<path fill="${color}" clip-rule="evenodd" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path> `;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variation === void 0 && $$bindings.variation && variation !== void 0)
    $$bindings.variation(variation);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    switch (variation) {
      case "outline":
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
        break;
      case "solid":
        svgpath = svgsolid;
        viewBox = "0 0 24 24";
        break;
      default:
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
    }
  }
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { role: "button" },
      { tabindex: "0" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      {
        class: escape_attribute_value($$props.class)
      },
      escape_object($$restProps),
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { fill: "none" },
      { viewBox: escape_attribute_value(viewBox) },
      { "stroke-width": "2" }
    ],
    {}
  )}><!-- HTML_TAG_START -->${svgpath}<!-- HTML_TAG_END --></svg> `;
});
let btnClass = "ms-3 md:hidden";
const NavHamburger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["menuClass", "onClick"]);
  let { menuClass = "h-6 w-6 shrink-0" } = $$props;
  let { onClick = void 0 } = $$props;
  getContext("navHidden") ?? writable(true);
  if ($$props.menuClass === void 0 && $$bindings.menuClass && menuClass !== void 0)
    $$bindings.menuClass(menuClass);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  return `${validate_component(ToolbarButton, "ToolbarButton").$$render($$result, Object.assign({}, { name: "Open main menu" }, $$restProps, { class: twMerge(btnClass, $$props.class) }), {}, {
    default: () => {
      return `${validate_component(Menu, "Menu").$$render(
        $$result,
        {
          class: twMerge(menuClass, $$props.classMenu)
        },
        {},
        {}
      )}`;
    }
  })} `;
});
const NavLi = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let active;
  let liClass;
  let $$restProps = compute_rest_props($$props, ["href", "activeClass", "nonActiveClass"]);
  let { href = "" } = $$props;
  let { activeClass = void 0 } = $$props;
  let { nonActiveClass = void 0 } = $$props;
  const context = getContext("navbarContext") ?? {};
  const activeUrlStore = getContext("activeUrl");
  let navUrl = "";
  activeUrlStore.subscribe((value) => {
    navUrl = value;
  });
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.nonActiveClass === void 0 && $$bindings.nonActiveClass && nonActiveClass !== void 0)
    $$bindings.nonActiveClass(nonActiveClass);
  active = navUrl ? href === navUrl : false;
  liClass = twMerge(
    "block py-2 pe-4 ps-3 md:p-0 rounded md:border-0",
    active ? activeClass ?? context.activeClass : nonActiveClass ?? context.nonActiveClass,
    $$props.class
  );
  return `<li>${((tag) => {
    return tag ? `<${href ? "a" : "div"}${spread(
      [
        {
          role: escape_attribute_value(href ? void 0 : "link")
        },
        { href: escape_attribute_value(href) },
        escape_object($$restProps),
        { class: escape_attribute_value(liClass) }
      ],
      {}
    )}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "div")}</li> `;
});
const NavUl = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "activeUrl",
    "divClass",
    "ulClass",
    "hidden",
    "slideParams",
    "activeClass",
    "nonActiveClass"
  ]);
  let $hiddenStore, $$unsubscribe_hiddenStore;
  const activeUrlStore = writable("");
  let { activeUrl = "" } = $$props;
  let { divClass: divClass2 = "w-full md:block md:w-auto" } = $$props;
  let { ulClass: ulClass2 = "flex flex-col p-4 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:text-sm md:font-medium" } = $$props;
  let { hidden = void 0 } = $$props;
  let { slideParams = {
    delay: 250,
    duration: 500,
    easing: quintOut
  } } = $$props;
  let { activeClass = "text-white bg-primary-700 md:bg-transparent md:text-primary-700 md:dark:text-white dark:bg-primary-600 md:dark:bg-transparent" } = $$props;
  let { nonActiveClass = "text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" } = $$props;
  setContext("navbarContext", { activeClass, nonActiveClass });
  setContext("activeUrl", activeUrlStore);
  let hiddenStore = getContext("navHidden");
  $$unsubscribe_hiddenStore = subscribe(hiddenStore, (value) => $hiddenStore = value);
  let _hidden;
  let _divClass;
  let _ulClass;
  if ($$props.activeUrl === void 0 && $$bindings.activeUrl && activeUrl !== void 0)
    $$bindings.activeUrl(activeUrl);
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass2 !== void 0)
    $$bindings.divClass(divClass2);
  if ($$props.ulClass === void 0 && $$bindings.ulClass && ulClass2 !== void 0)
    $$bindings.ulClass(ulClass2);
  if ($$props.hidden === void 0 && $$bindings.hidden && hidden !== void 0)
    $$bindings.hidden(hidden);
  if ($$props.slideParams === void 0 && $$bindings.slideParams && slideParams !== void 0)
    $$bindings.slideParams(slideParams);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.nonActiveClass === void 0 && $$bindings.nonActiveClass && nonActiveClass !== void 0)
    $$bindings.nonActiveClass(nonActiveClass);
  {
    {
      activeUrlStore.set(activeUrl);
    }
  }
  _hidden = hidden ?? $hiddenStore ?? true;
  _divClass = twMerge(divClass2, $$props.class);
  _ulClass = twMerge(
    ulClass2,
    // 'divide-y md:divide-y-0 divide-gray-100 dark:divide-gray-700',
    $$props.classUl
  );
  $$unsubscribe_hiddenStore();
  return `${!_hidden ? `<div${spread(
    [
      escape_object($$restProps),
      { class: escape_attribute_value(_divClass) },
      { role: "button" },
      { tabindex: "0" }
    ],
    {}
  )}>${validate_component(Frame, "Frame").$$render(
    $$result,
    {
      tag: "ul",
      border: true,
      rounded: true,
      color: "navbarUl",
      class: _ulClass
    },
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}</div>` : `<div${spread(
    [
      escape_object($$restProps),
      { class: escape_attribute_value(_divClass) },
      { hidden: _hidden || null }
    ],
    {}
  )}><ul${add_attribute("class", _ulClass, 0)}>${slots.default ? slots.default({}) : ``}</ul></div>`} `;
});
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["activeUrl", "asideClass", "nonActiveClass", "activeClass", "ariaLabel"]);
  const activeUrlStore = writable("");
  let { activeUrl = "" } = $$props;
  let { asideClass = "w-64" } = $$props;
  let { nonActiveClass = "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" } = $$props;
  let { activeClass = "flex items-center p-2 text-base font-normal text-gray-900 bg-gray-200 dark:bg-gray-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" } = $$props;
  let { ariaLabel = "Sidebar" } = $$props;
  setContext("sidebarContext", { activeClass, nonActiveClass });
  setContext("activeUrl", activeUrlStore);
  if ($$props.activeUrl === void 0 && $$bindings.activeUrl && activeUrl !== void 0)
    $$bindings.activeUrl(activeUrl);
  if ($$props.asideClass === void 0 && $$bindings.asideClass && asideClass !== void 0)
    $$bindings.asideClass(asideClass);
  if ($$props.nonActiveClass === void 0 && $$bindings.nonActiveClass && nonActiveClass !== void 0)
    $$bindings.nonActiveClass(nonActiveClass);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    {
      activeUrlStore.set(activeUrl);
    }
  }
  return `<aside${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(asideClass, $$props.class))
      },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</aside> `;
});
const SidebarItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let active;
  let aClass;
  let $$restProps = compute_rest_props($$props, ["href", "label", "spanClass", "activeClass", "nonActiveClass"]);
  let $$slots = compute_slots(slots);
  let { href = "" } = $$props;
  let { label = "" } = $$props;
  let { spanClass: spanClass2 = "ms-3" } = $$props;
  let { activeClass = void 0 } = $$props;
  let { nonActiveClass = void 0 } = $$props;
  const context = getContext("sidebarContext") ?? {};
  const activeUrlStore = getContext("activeUrl");
  let sidebarUrl = "";
  activeUrlStore.subscribe((value) => {
    sidebarUrl = value;
  });
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.spanClass === void 0 && $$bindings.spanClass && spanClass2 !== void 0)
    $$bindings.spanClass(spanClass2);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.nonActiveClass === void 0 && $$bindings.nonActiveClass && nonActiveClass !== void 0)
    $$bindings.nonActiveClass(nonActiveClass);
  active = sidebarUrl ? href === sidebarUrl : false;
  aClass = twMerge(
    active ? activeClass ?? context.activeClass : nonActiveClass ?? context.nonActiveClass,
    $$props.class
  );
  return `<li><a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      { class: escape_attribute_value(aClass) }
    ],
    {}
  )}>${slots.icon ? slots.icon({}) : ``} <span${add_attribute("class", spanClass2, 0)}>${escape(label)}</span> ${$$slots.subtext ? `${slots.subtext ? slots.subtext({}) : ``}` : ``}</a></li> `;
});
const SidebarGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["ulClass", "borderClass", "border"]);
  let { ulClass: ulClass2 = "space-y-2" } = $$props;
  let { borderClass = "pt-4 mt-4 border-t border-gray-200 dark:border-gray-700" } = $$props;
  let { border = false } = $$props;
  if (border) {
    ulClass2 += " " + borderClass;
  }
  if ($$props.ulClass === void 0 && $$bindings.ulClass && ulClass2 !== void 0)
    $$bindings.ulClass(ulClass2);
  if ($$props.borderClass === void 0 && $$bindings.borderClass && borderClass !== void 0)
    $$bindings.borderClass(borderClass);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  return `<ul${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(ulClass2, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</ul> `;
});
const SidebarWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["divClass"]);
  let { divClass: divClass2 = "overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800" } = $$props;
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass2 !== void 0)
    $$bindings.divClass(divClass2);
  return `<div${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(divClass2, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div> `;
});
let divClass = "w-full md:block md:w-auto pr-8";
let ulClass = "flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium";
let backdrop = false;
let spanClass = "pl-2 self-center text-md text-gray-900 whitespace-nowrap dark:text-white";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activeUrl;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let drawerHidden = false;
  let toggleDrawer = () => {
    drawerHidden = !drawerHidden;
  };
  let { data } = $$props;
  let activateClickOutside = true;
  let transitionParams = { x: -320, duration: 200, easing: sineIn };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      {
        drawerHidden = true;
        activateClickOutside = true;
      }
    }
    activeUrl = $page.url.pathname;
    $$rendered = ` <div class="relative px-8">${validate_component(Navbar, "Navbar").$$render(
      $$result,
      {
        class: "px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 start-0 border-b"
      },
      {},
      {
        default: ({ hidden, toggle }) => {
          return `${validate_component(NavHamburger, "NavHamburger").$$render(
            $$result,
            {
              onClick: toggleDrawer,
              class: "ml-3 lg:hidden"
            },
            {},
            {}
          )} ${validate_component(NavBrand, "NavBrand").$$render($$result, { href: "/", class: "lg:ml-64" }, {}, {
            default: () => {
              return `${validate_component(Cog, "Cog").$$render($$result, {}, {}, {})} <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white pl-4" data-svelte-h="svelte-18shhbr">My Website</span>`;
            }
          })}  ${validate_component(NavUl, "NavUl").$$render($$result, { hidden, divClass, ulClass }, {}, {
            default: () => {
              return `${validate_component(NavLi, "NavLi").$$render($$result, { href: "/" }, {}, {
                default: () => {
                  return `Home`;
                }
              })} ${validate_component(NavLi, "NavLi").$$render($$result, { href: "/project" }, {}, {
                default: () => {
                  return `Projects`;
                }
              })} ${validate_component(NavLi, "NavLi").$$render(
                $$result,
                {
                  href: "https://github.com/shinokada/flowbite-sveltekit-responsive-sidebar-layout"
                },
                {},
                {
                  default: () => {
                    return `GitHub`;
                  }
                }
              )}`;
            }
          })} <div class="flex items-center md:order-2">${!data.session ? `<a href="/login_logout" data-svelte-h="svelte-cemjvd">Sign in</a>` : `${validate_component(Avatar, "Avatar").$$render($$result, { id: "avatar-menu" }, {}, {})} ${validate_component(Dropdown, "Dropdown").$$render(
            $$result,
            {
              placement: "bottom",
              triggeredBy: "#avatar-menu"
            },
            {},
            {
              default: () => {
                return `${validate_component(DropdownHeader, "DropdownHeader").$$render($$result, {}, {}, {
                  default: () => {
                    return `<span class="block text-sm">${escape(data.session.user.id)}</span> <span class="block truncate text-sm font-medium">${escape(data.session.user.email)}</span>`;
                  }
                })} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `<a href="/user_profile" data-svelte-h="svelte-14a3t3c">User profile</a>`;
                  }
                })} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `Settings`;
                  }
                })} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `Earnings`;
                  }
                })} ${validate_component(DropdownDivider, "DropdownDivider").$$render($$result, {}, {}, {})} ${validate_component(DropdownItem, "DropdownItem").$$render($$result, {}, {}, {
                  default: () => {
                    return `<form action="/login_logout?/logout" method="POST" data-svelte-h="svelte-kqwk6l"><button type="submit">Sign out</button></form>`;
                  }
                })}`;
              }
            }
          )}`}</div>`;
        }
      }
    )}</div> ${validate_component(Drawer, "Drawer").$$render(
      $$result,
      {
        transitionType: "fly",
        backdrop,
        transitionParams,
        width: "w-64",
        id: "sidebar",
        hidden: drawerHidden,
        activateClickOutside
      },
      {
        hidden: ($$value) => {
          drawerHidden = $$value;
          $$settled = false;
        },
        activateClickOutside: ($$value) => {
          activateClickOutside = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="flex items-center">${validate_component(CloseButton, "CloseButton").$$render($$result, { class: "mb-4 dark:text-white lg:hidden" }, {}, {})}</div> ${validate_component(Sidebar, "Sidebar").$$render($$result, { asideClass: "w-54" }, {}, {
            default: () => {
              return `${validate_component(SidebarWrapper, "SidebarWrapper").$$render(
                $$result,
                {
                  divClass: "overflow-y-auto py-4 px-3 rounded dark:bg-gray-800"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(SidebarGroup, "SidebarGroup").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(SidebarItem, "SidebarItem").$$render(
                          $$result,
                          {
                            label: "Home",
                            href: "/",
                            active: activeUrl === `/`
                          },
                          {},
                          {
                            icon: () => {
                              return `${validate_component(Home, "Home").$$render($$result, {}, {}, {})}`;
                            }
                          }
                        )} ${validate_component(SidebarItem, "SidebarItem").$$render(
                          $$result,
                          {
                            label: "Projects",
                            href: "/project",
                            spanClass,
                            active: activeUrl === "/project"
                          },
                          {},
                          {
                            icon: () => {
                              return `${validate_component(Folder, "Folder").$$render($$result, {}, {}, {})}`;
                            }
                          }
                        )}`;
                      }
                    })}`;
                  }
                }
              )}`;
            }
          })}`;
        }
      }
    )} <div class="flex px-4 mx-auto mt-24 w-full"><main class="lg:ml-72 w-full mx-auto">${slots.default ? slots.default({}) : ``}</main></div> `;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Layout as default
};
