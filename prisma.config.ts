import "dotenv/config";
import { definePrismaConfig } from "prisma/config";
import { defineConfig as ormConfig } from "@prisma/orm-postgres/config";
import { defineConfig as composer } from "@prisma/composer/config";
import { nodeBuild } from "@prisma/composer/node/control";
import { nextjsBuild } from "@prisma/composer/nextjs/control";
import {
  prismaCloud,
  prismaState,
} from "@prisma/composer-prisma-cloud/control";
import pgvector from "@prisma/orm-extension-pgvector/control";

export default definePrismaConfig({
  skills: {
    agents: ["claude", "cursor", "agents", "devin"],
  },
  orm: ormConfig({
    contract: "./prisma/contract.prisma",
    extensions: [pgvector],
    db: {
      connection: process.env.DATABASE_URL!,
    },
  }),
  composer: composer({
    entry: "./module.ts",
    extensions: [
      prismaCloud({ region: "us-east-1" }),
      nodeBuild(),
      nextjsBuild(),
    ],
    state: prismaState(),
  }),
});
