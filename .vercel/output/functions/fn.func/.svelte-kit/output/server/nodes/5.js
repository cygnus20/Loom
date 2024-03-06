import * as server from '../entries/pages/project/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/project/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/project/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.QupoAueo.js","_app/immutable/chunks/scheduler.HbwKJWOp.js","_app/immutable/chunks/index.8g-ltFm-.js","_app/immutable/chunks/each.MQrrb-pR.js","_app/immutable/chunks/Input.uNpdyBr9.js","_app/immutable/chunks/Frame.fKDvhI-6.js","_app/immutable/chunks/Wrapper.Mr0cCFyr.js","_app/immutable/chunks/CloseButton.6k_5TkK5.js","_app/immutable/chunks/DropdownItem.4kFprK10.js","_app/immutable/chunks/index.wSU-5UJT.js"];
export const stylesheets = [];
export const fonts = [];
