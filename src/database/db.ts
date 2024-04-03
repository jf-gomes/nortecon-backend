import { Sequelize } from "sequelize";
import dotenv from 'dotenv'

dotenv.config()

const db = process.env.DB as string
const user = process.env.USER as string
const pass = process.env.PASS
const host = process.env.HOST

const sequelize = new Sequelize(db, user, pass, {
    host: host,
    dialect: 'mysql'
})

async function authenticate(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export {
    sequelize,
    authenticate
}