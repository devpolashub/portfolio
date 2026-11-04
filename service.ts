import nextjs from "@prisma/composer/nextjs";
import { compute } from "@prisma/composer-prisma-cloud";
import { postgres } from "@prisma/composer-prisma-cloud/orm";
import { portfolioContract } from "./prisma/composer";

export default compute({
  name: "portfolio",
  deps: {
    database: postgres(portfolioContract),
  },
  build: nextjs({ module: import.meta.url, appDir: "." }),
});
