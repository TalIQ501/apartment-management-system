import Fastify from "fastify";
import fastifyEnv from "@fastify/env";

const schema = {
  type: "object",
  required: ["PORT"],
  properties: {
    PORT: {
      type: "number",
    },
  },
};

export const buildApp = async () => {
  const app = Fastify({ 
    logger: true 
  })

  app.register(fastifyEnv, {
    dotenv: true,
    schema
  })

  return app;
}
