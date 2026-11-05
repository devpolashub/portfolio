import { module } from "@prisma/composer";
import { postgres } from "@prisma/composer-prisma-cloud/orm";

import app from "./service";
import { portfolioContract } from "./prisma/composer";

export default module("portfolio", ({ provision }) => {
  const database = provision(
    postgres({
      name: "portfolio-database",
      contract: portfolioContract,
      config: "./prisma.config.ts",
    }),
    { id: "portfolio-database" },
  );

  provision(app, { deps: { database } });
});
