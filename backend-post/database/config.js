/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config({
  path: `${process.cwd()}/.env`,
});
const env = process.env.NODE_ENV || 'development';
module.exports = {
  [env]: {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    logging: false,
  },
};
