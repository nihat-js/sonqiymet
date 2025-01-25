export const appConfig = {
    // your app config here
    JWT_SECRET: process.env.JWT_SECRET || "a20a2ggbb",
    DATABASE_URL: process.env.DATABASE_URL || "postgres://",
    JWT_TIME : "1w",
}
