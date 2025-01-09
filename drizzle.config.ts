import "dotenv/config";
//import type { Config } from "drizzle-kit";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
    schema: "./db/schema.ts",
    out: "./drizzle",
    dialect: "postgresql",
    //driver: "pg",
    dbCredentials: {
        //connectionString: process.env.DATABASE_URL!,
        url: process.env.DATABASE_URL!,
    },
});