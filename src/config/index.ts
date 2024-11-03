import { config } from 'dotenv'
import path from 'path' // it is built in nodejs

config({ path: path.join(__dirname, `../../.env.${process.env.NODE_ENV}`) }) // searching the file

const { PORT, NODE_ENV, DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME, DB_PORT } =
    process.env
export const Config = {
    PORT,
    NODE_ENV,
    DB_HOST,
    DB_USERNAME,
    DB_PASSWORD,
    DB_NAME,
    DB_PORT,
}
