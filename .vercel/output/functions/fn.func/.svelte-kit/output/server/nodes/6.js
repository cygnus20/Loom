import * as server from '../entries/pages/project/_id_/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/project/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/project/[id]/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.jCdP_NZj.js","_app/immutable/chunks/scheduler.HbwKJWOp.js","_app/immutable/chunks/index.8g-ltFm-.js","_app/immutable/chunks/each.MQrrb-pR.js","_app/immutable/chunks/Input.uNpdyBr9.js","_app/immutable/chunks/Frame.fKDvhI-6.js","_app/immutable/chunks/Wrapper.Mr0cCFyr.js","_app/immutable/chunks/forms.ra5y80Gi.js","_app/immutable/chunks/parse.RrI1B0B4.js","_app/immutable/chunks/singletons.xdQy5V6w.js","_app/immutable/chunks/index.wSU-5UJT.js","_app/immutable/chunks/paths.o3PWuca0.js"];
export const stylesheets = [];
export const fonts = [];
