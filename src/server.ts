import express, { json } from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
import conectionDatabase from './config/conection';
import taskRoutes from './routes/taskRoutes';


dotenv.config()
const PORT = process.env.PORT || 4000
const app = express()
app.use(cors())
app.use(json());

app.get('/', (req, res) => res.send('Bem-vindo!'));
app.use("/", taskRoutes)

app.listen(PORT, () => {
    conectionDatabase();
    console.log(`Servidor rodando com sucesso ${"http://localhost:3000"}:${PORT}`)


})
