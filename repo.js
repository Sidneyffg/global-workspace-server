import fs from "fs";
import { v4 as uuid } from "uuid";

export default class RepoHandler {
  /**
   * @param {import("express").Express} app
   */
  constructor(app) {
    this.app = app;
    app.get("/newRepo", (req, res) => {
      const name = req.query?.name;
      const password = req.query?.password;
      if (!name || !password) return;

      const id = this.newRepo(name, password);
      res.send(JSON.stringify({ id }));
    });

    app.get("/connect", (req, res) => {
      const id = req.query?.id;
      const password = req.query?.password;
      const version = parseInt(req.query?.version);
      if (!id || !password || !version) return;
    });
  }

  newRepo(name, password) {
    const id = uuid();
    const repoData = {
      id,
      name,
      password,
      version: 1,
    };

    this.writeRepoFileStructure(repoData);
    return id;
  }

  connect(id, password, version) {}

  change(id,password,type,change){
    const repoPath = this.getRepoPath(id);
  }

  /**
   * @param {RepoData} repoData
   * @returns {string} path
   */
  writeRepoFileStructure(repoData) {
    const path = this.getRepoPath(repoData.id);
    if (fs.existsSync(path))
      return console.log("Tried to create existing repo structure...");

    fs.mkdirSync(path);
    fs.mkdirSync(`${path}/repo`);
    const parsedData = JSON.stringify(repoData);
    fs.writeFileSync(`${path}/data.json`, parsedData);
  }

  getRepoPath(id) {
    return `${process.cwd()}/repos/${id}`;
  }

  readRepoData(path){
    if(!fs.existsSync(path) || fs.file)
  }

  /**
   * @type {import("express").Express}
   */
  app;
}

/**
 * @typedef {Object} RepoData
 * @property {string} RepoData.id
 * @property {string} RepoData.name
 * @property {string} RepoData.password
 */
