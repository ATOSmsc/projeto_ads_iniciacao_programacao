const express = require("express");
const rotaMusicas = require("./rotas/musica");
const rotaReproduzir = require("./rotas/reproduzir");

const app = express();


app.use("/musica", rotaMusicas);
app.use("/reproduzir", rotaReproduzir);


const port = 8000;

app.listen(port, () => {
  console.log(`Online on port ${port}`);
});
