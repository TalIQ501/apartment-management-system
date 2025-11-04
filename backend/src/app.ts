import Fastify from "fastify";
import envPlugin from "./plugins/envPlugin.js";
import dbPlugin from "./plugins/dbPlugin.js";

export const buildApp = async () => {
  const app = Fastify({ 
    logger: true 
  });
  
  await app.register(envPlugin);

  await app.register(dbPlugin);

  return app;
}