import { Pool } from "pg";

const pool = new Pool({
  user: "user",
  host: "localhost",
  database: "db",
  password: "password",
  port: 5433,
});

export default pool;
