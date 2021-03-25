const Employee = require('../../Models/EmployeeModel.js');
const mongoose = require('mongoose');
const EmployeeDB = mongoose.model('Employees');

exports.Index = (req, res) => {

    Employee.findAll()
    .then(employees => {
        res.send(employees);
    });

    EmployeeDB.find()
        .then(employees => {
            res.send(employees);
        });
};

exports.Show = (req, res) => {
    EmployeeDB.findOne({
        _id: req.params.id
    }).then(employee => {
        res.send(employee);
    })
};

exports.Create = (req, res) => {
    res.send('11')
};

exports.Store = (req, res) => {
    const newEmployee = {
        first_name: "ahmad",
        last_name: "montazeri",
        username: "kybora",
        email: "amontazeri53@yahoo.com",
        password: "12345678",
        created_at: Date(),
        updated_at: Date(),
    };

    new Employee(newEmployee)
        .save()
        .then(() => {
            res.send(Employee);
        });
};

exports.Edit = (req, res) => {
    res.send('about')
};

exports.Update = (req, res) => {
    res.send('about')
};

exports.Destroy = (req, res) => {
    res.send('about')
};
