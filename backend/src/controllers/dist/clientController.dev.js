"use strict";

var fs = require('fs');

var path = require('path');

module.exports = {
  test: function test(req, res) {
    var aux = JSON.parse(fs.readFileSync(path.join(__dirname, '../config/') + 'user.json'));
    aux.user.token = "Safadinha demaiszinho!";
    var data = JSON.stringify(aux, null, 2);
    fs.writeFile(path.join(__dirname, '../config/') + 'user.json', data, finished);

    function finished(err) {
      console.log('Tudo certo!');
    }

    return res.json(aux);
  }
};