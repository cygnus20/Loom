import * as server from '../entries/pages/update_password/_page.server.ts.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/update_password/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/update_password/+page.server.ts";
export const imports = ["_app/immutable/nodes/10.3TZraaFy.js","_app/immutable/chunks/scheduler.HbwKJWOp.js","_app/immutable/chunks/index.8g-ltFm-.js","_app/immutable/chunks/forms.ra5y80Gi.js","_app/immutable/chunks/parse.RrI1B0B4.js","_app/immutable/chunks/singletons.xdQy5V6w.js","_app/immutable/chunks/index.wSU-5UJT.js","_app/immutable/chunks/paths.o3PWuca0.js"];
export const stylesheets = [];
export const fonts = [];
