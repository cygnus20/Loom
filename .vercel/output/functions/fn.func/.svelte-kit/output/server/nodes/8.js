import * as server from '../entries/pages/reset_password/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/reset_password/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/reset_password/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.BkVpPIJd.js","_app/immutable/chunks/scheduler.HbwKJWOp.js","_app/immutable/chunks/index.8g-ltFm-.js","_app/immutable/chunks/forms.ra5y80Gi.js","_app/immutable/chunks/parse.RrI1B0B4.js","_app/immutable/chunks/singletons.xdQy5V6w.js","_app/immutable/chunks/index.wSU-5UJT.js","_app/immutable/chunks/paths.o3PWuca0.js","_app/immutable/chunks/Input.uNpdyBr9.js","_app/immutable/chunks/Frame.fKDvhI-6.js","_app/immutable/chunks/Wrapper.Mr0cCFyr.js"];
export const stylesheets = [];
export const fonts = [];
