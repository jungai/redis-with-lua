import { Callback, Result } from "ioredis";

declare module "ioredis" {
  interface RedisCommander<Context> {
    getSongs(
      key: string,
      argv: string,
      callback?: Callback<string>
    ): Result<string, Context>;
  }
}
