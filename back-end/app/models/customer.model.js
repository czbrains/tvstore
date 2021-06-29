const { query } = require("./db.js");
const sql = require("./db.js");
// functions
function buildConditions(params) {
  var conditions = [];
  var values = [];
  var conditionsStr;
  var tam = 0;
  // console.log(params)
  
  if (params.brand != "") {
    conditions.push("brand = " + "'" + params.brand + "'");
    values.push("'" + params.brand + "'");
    tam ++;
  }


  if (params.screen_type != "") {
    conditions.push("screen_type = " + "'" + params.screen_type + "'");
    values.push("'" + params.screen_type + "'");
    tam ++;
  }

  if (params.screen_size != "") {
    conditions.push("screen_size = " + "'" + params.screen_type + "'");
    values.push("'" + params.screen_type + "'");
    tam ++;
  }

  if (params.resolution != "") {
    conditions.push("resolution = " + "'" + params.resolution + "'");
    values.push("'" + params.resolution + "'");
    tam ++;
  }

  if (params.voltage != "") {
    conditions.push("voltage = " + "'" + params.voltage + "'");
    values.push("'" + params.voltage + "'");
    tam ++;
  }

  return {
    where: conditions.length ?
      conditions.join(' AND ') : '1',
    values: values,
    tam:tam
  };
}


// constructor
const Customer = function (customer) {
  this.brand = customer.brand;
  this.screen_type = customer.screen_type;
  this.screen_size = customer.screen_size;
  this.resolution = customer.resolution;
  this.voltage = customer.voltage;

};


Customer.getAll = result => {
  sql.query("SELECT * FROM item iten inner join item_meta meta on iten.id = meta.id ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    result(null, res);
  });
};

Customer.filtro = (params, result) => {
  var conditions = buildConditions(params);
  if(conditions.tam >= 1){
  var query = 'SELECT * FROM item iten WHERE ' + conditions.where;
  }else{
    var query = 'SELECT * FROM item iten'
  }
  sql.query(query, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    result(null, res);
  });
};

Customer.foco = (id, result) => {
  var query = "SELECT * FROM item iten inner join item_meta meta on iten.id = meta.id where iten.id = " + id ;
  sql.query( query, (err, res) => {
    if (err) {
      result(null, err);
      return;
    }

    result(null, res);
  });
};
Customer.dados = result => {
  sql.query("SELECT DIST brand, screen_type, screen_size, resolution, voltage  FROM item iten inner join item_meta meta on iten.id = meta.id ", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    result(null, res);
  });
};

module.exports = Customer;