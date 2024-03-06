import * as server from '../entries/pages/login_logout/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login_logout/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/login_logout/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.L6uKfTZG.js","_app/immutable/chunks/scheduler.HbwKJWOp.js","_app/immutable/chunks/index.8g-ltFm-.js","_app/immutable/chunks/Input.uNpdyBr9.js","_app/immutable/chunks/Frame.fKDvhI-6.js","_app/immutable/chunks/Wrapper.Mr0cCFyr.js","_app/immutable/chunks/paths.o3PWuca0.js"];
export const stylesheets = [];
export const fonts = [];
