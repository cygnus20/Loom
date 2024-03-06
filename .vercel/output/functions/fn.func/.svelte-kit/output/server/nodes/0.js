import * as universal from '../entries/pages/_layout.ts.js';
import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.1Dwzir1v.js","_app/immutable/chunks/preload-helper.0HuHagjb.js","_app/immutable/chunks/scheduler.HbwKJWOp.js","_app/immutable/chunks/index.8g-ltFm-.js","_app/immutable/chunks/stores.mB9qp188.js","_app/immutable/chunks/singletons.xdQy5V6w.js","_app/immutable/chunks/index.wSU-5UJT.js","_app/immutable/chunks/paths.o3PWuca0.js","_app/immutable/chunks/Frame.fKDvhI-6.js","_app/immutable/chunks/index.HtXAd2fM.js","_app/immutable/chunks/CloseButton.6k_5TkK5.js","_app/immutable/chunks/DropdownItem.4kFprK10.js","_app/immutable/chunks/Wrapper.Mr0cCFyr.js","_app/immutable/chunks/forms.ra5y80Gi.js","_app/immutable/chunks/parse.RrI1B0B4.js"];
export const stylesheets = ["_app/immutable/assets/0.pRx6wOua.css"];
export const fonts = [];
