import 'dotenv/config'
import { DataSource } from 'typeorm'

const datasource = new DataSource({
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PW,
  port: Number(process.env.MYSQL_PORT),
  database: process.env.MYSQL_DB,
  entities: ['dist/**/**/*.entity{.ts,.js}'],
})

export default datasource
