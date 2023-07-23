import postgres from "postgres";
import { username, password, host, port, database } from "./config";

export const sql = postgres(
  `postgres://${username}:${password}@${host}:${port}/${database}`
);
