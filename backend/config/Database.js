import { Sequelize } from "sequelize";

const db = new Sequelize('crud_db', 'root', '', {
  host: '34.55.187.241',
  dialect: 'mysql',
});

export default db;
