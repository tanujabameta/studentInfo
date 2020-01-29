const express = require('express');
const app = express();
const studentRoute = express.Router();

// Student model
let Student = require('../database/model/student.model.js');

// Get all student
studentRoute.route('/').get((req, res) => {
  Student.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

module.exports = studentRoute;
