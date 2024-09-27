import express from "express";
import RepoHandler from "./repo.js";
const app = express();
const port = 3000;
const repoHandler = new RepoHandler(app);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
