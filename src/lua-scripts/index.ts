import type { TLuaScript } from "../types";

export const luaScripts: TLuaScript[] = [
  {
    command: "getSongs",
    lua: `
            local key = KEYS[1]

            return key
        `,
  },
];
