export default class RepoHandler {
  /**
   * @param {import("express").Express} app
   */
  constructor(app) {
    this.app = app;
    app.get("/newRepo", (req, res) => {
      console.log(req.query);
      res.send(JSON.stringify({ hello: "ja" }));
    });
  }

  /**
   * @type {import("express").Express}
   */
  app;
}
