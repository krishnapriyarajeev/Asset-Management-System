declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    POSTGRES_DB: string;
    POSTGRES_HOST: string;
    POSTGRES_PORT: string;
    POSTGRES_USER: string;
    POSTGRES_PASSWORD: string;
    JWT_SECRET: string;
    TOKEN_EXPIRY: string;
  }
}
