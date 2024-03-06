import * as server from '../entries/pages/user_profile/_page.server.ts.js';

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/user_profile/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/user_profile/+page.server.ts";
export const imports = ["_app/immutable/nodes/11.8Zqwej6f.js","_app/immutable/chunks/scheduler.HbwKJWOp.js","_app/immutable/chunks/index.8g-ltFm-.js"];
export const stylesheets = [];
export const fonts = [];
