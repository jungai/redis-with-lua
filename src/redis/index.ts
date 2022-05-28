import Redis from "ioredis";
import { luaScripts } from "../lua-scripts";

const setupCommand = (r: Redis): Redis => {
  // side effect
  // register command
  luaScripts.forEach(({ command, lua }) => {
    r.defineCommand(command, {
      lua,
    });
  });

  return r;
};

const redis = [setupCommand].reduce(
  (app, register) => register(app),
  // lua script can be initialize with constructor e.g. new Redis({ scripts: ...})
  new Redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT ? +process.env.REDIS_PORT : 6379,
  })
);

// events
redis.on("connect", () => {
  console.log("redis connected 🚀");
});

export { redis };
