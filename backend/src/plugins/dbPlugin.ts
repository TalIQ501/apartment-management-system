import type { FastifyPluginAsync } from "fastify";
import fp from "fastify-plugin";
import pg from "pg";

export const dbPlugin: FastifyPluginAsync = async (app) => {
  const pool = new pg.Pool({
    connectionString: app.config.DATABASE_URL,
  });

  app.decorate("db", pool);

  app.addHook("onClose", async (app) => {
    await app.db.end();
  });
};

export default fp(dbPlugin);

declare module "fastify" {
  interface FastifyInstance {
    db: pg.Pool;
  }
}
