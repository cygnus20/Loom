

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/check_email/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.e60mQl3A.js","_app/immutable/chunks/scheduler.HbwKJWOp.js","_app/immutable/chunks/index.8g-ltFm-.js"];
export const stylesheets = [];
export const fonts = [];
