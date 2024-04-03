import { Router } from "express";
import { QueryTypes } from "sequelize";
import { sequelize } from "./database/db";

const routes = Router()

routes.get('/produtos', async (req, res) => {
    const products = await sequelize.query('select * from tb_produto', { type: QueryTypes.SELECT })
    return res.send(products)
})

export default routes