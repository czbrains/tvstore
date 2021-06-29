const Customer = require("../models/customer.model.js");


exports.findAll = (req, res) => {
  Customer.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Sem estoque."
      });
    else res.send(data);
  });
};

exports.busca = (req, res) => {
  try {
    Customer.filtro(req.query, (err, data) => {
      if (err)
        res.status(500).send({
          message: err.message || "Sem estoque."
        });
      else res.send(data);
    });
  } catch (error) {
    console.log("erro" + error)
    Customer.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message: err.message || "Sem estoque."
        });
      else res.send(data);
    });
  }
};
exports.detalhes = (req, res) => {
  Customer.foco(req.params.id, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Sem estoque."
      });
    else res.send(data);
  });
};