import path from 'path';
import dotenv from 'dotenv';
require('dotenv').config({path: path.join(__dirname, '../', '.env') });
export const environment = process.env.NODE_ENV || 'development';
export const port = process.env.PORT || 3000;
export const databaseUrl = process.env.DATABASE_URL || 'postgres://localhost:5432/database';

export default {
  environment,
  port,
  databaseUrl,
}
