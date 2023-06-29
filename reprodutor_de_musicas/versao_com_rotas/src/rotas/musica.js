const { Router } = require("express");
const router = Router();

const fs = require("fs");
const path = require("path");

router.get("/", (req, res) => {
  const musicasPath = path.join(__dirname, "musicas");
  fs.readdir(musicasPath, (err, files) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao ler a pasta de músicas." });
    }

    const musicas = files
      .filter((file) => file.endsWith(".mp3"))
      .map((file) => ({ nome: file }));

    let musicaHtml = [];
    musicas.forEach((musica) => {
      // console.log(musica)
      musicaHtml.push(
        `<a style="font-size: 20px; text-decoration: none; color: #FFF;" href="/musica/${musica.nome}">${musica.nome}</a><br>`
      );
    });

    // console.log(musicaHtml)
    res.send(`
    <div style="background: blue; color: #FFF; text-align: center; width: 500px">
    <h1>Musicas</h1>
    ${musicaHtml.join("")}
    </div>
    `);
  });
});

router.get("/:nomeMusica", (req, res) => {
  const { nomeMusica } = req.params;
  const musicasPath = path.join(__dirname, "musicas", nomeMusica);

  if (!fs.existsSync(musicasPath)) {
    return res.status(404).json({ error: "Música não encontrada." });
  }

  const stream = fs.createReadStream(musicasPath);
  res.set("Content-Type", "audio/mpeg");
  stream.pipe(res);
});

module.exports = router;
