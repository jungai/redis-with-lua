import { Callback, Result } from "ioredis";

declare module "ioredis" {
  interface RedisCommander<Context> {
    getSongs(
      num: number,
      key: string,
      callback?: Callback<string>
    ): Result<string, Context>;
  }
}
