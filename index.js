import express from "express";
import path, { dirname } from "path";
import routes from './router/routes.js'
import connectToDb from "./database/db.js";
const __dirname = path.dirname(new URL(import.meta.url).pathname);
connectToDb();
const app = express();
const port = 4003;


app.set( "view engine","ejs")
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded());
app.use(routes)

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
