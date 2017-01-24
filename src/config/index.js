export const environment = process.env.NODE_ENV || 'development';
export const port = process.env.PORT || 3000;
export const databaseUrl = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/database';

export default {
  environment,
  port,
  databaseUrl,
}
