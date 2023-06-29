const { Router } = require("express");
const router = Router();

const fs = require("fs");
const path = require("path");

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