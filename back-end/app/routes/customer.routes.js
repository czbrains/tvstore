module.exports = app => {
  const customers = require("../controllers/customer.controller.js");

  app.get("/api", customers.findAll);
  app.get("/api/filters", customers.busca);
  // app.get("/api/detalhe/:id?", customers.detalhes);
  app.get("/api/detalhes/:id?", customers.detalhes);
  app.get("/api/dados")

};
