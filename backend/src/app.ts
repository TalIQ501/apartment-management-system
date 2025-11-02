import Fastify from "fastify";
import envPlugin from "./plugins/envPlugin.js";

export const buildApp = async () => {
  const app = Fastify({ 
    logger: true 
  });
  
  await app.register(envPlugin);

  return app;
}