import "dotenv/config";
import { redis } from "./redis";

(async () => {
  const result = await redis.getSongs(1, "iu");

  console.log("result", result);
})();
