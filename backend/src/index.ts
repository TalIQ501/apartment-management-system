import { buildApp } from "./app.js";

const start = async () => {
  const app = await buildApp();

  try {
    const port = app.config.PORT;
    await app.listen({ port });
    console.log(`Server listening at Port ${port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();