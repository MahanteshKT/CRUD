const express = require("express");
const router = express.Router();
const employeeSchema = require("../schema/employeeSchema");

router.post("/create-employee", (req, res, next) => {
  employeeSchema
    .create(req.body)
    .then((data) => {
      return res.json(data);
    })
    .catch((error) => {
      return next(err);
    });
});

router.get("/", (req, res, next) => {
  employeeSchema
    .find({})
    .then((data) => {
      if (data) {
        return res.json(data);
      }
    })
    .catch((err) => {
      return next(err);
    });
});

router.post("/login", (req, res, next) => {
  const { name, phone, email, password } = req.body;
  employeeSchema.findOne({ email }).then((employee) => {
    if (employee) {
      if (employee.password === password) {
        res.json("login successfull");
      } else {
        res.json("password incorrect");
      }
    } else {
      res.json("No record found");
    }
  });
});

router.delete("/delete-employee/:id", (req, res, next) => {
  employeeSchema
    .findByIdAndRemove(req.params.id)
    .then((data) => {
      if (data) {
        return res.json(data);
      }
    })
    .catch((err) => next(err));
});

router
  .route("/update-employee/:id")
  .get((req, res, next) => {
    employeeSchema
      .findById(req.params.id)
      .then((data) => res.json(data))
      .catch((err) => next(err));
  })
  .put((req, res, next) => {
    employeeSchema
      .findByIdAndUpdate(req.params.id, { $set: req.body })
      .then((data) => res.json(data))
      .catch((err) => next(err));
  });
module.exports = router;
