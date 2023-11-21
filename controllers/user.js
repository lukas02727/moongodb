const users = require("../models/users");
const User = require("../models/users");

exports.getAllUsers = async (req, res) => {
    try{
      const result = await User.find().select("username email");
      if (result && result.length !== 0) {
          return res.status(200).send({
            msg: "User found!",
            result
          })
      }
     res.status(404).send({
      msg: "Users were not found",
      result
     })
    } catch (err) {
      res.status(500).send({
        msg: "Users were not found",
        err
       });
    }
  }
  exports.getUserById = async (req, res) => {
    try{
      const result = await User.findById(req.params.id);
      if (result) {
        return res.status(200).send({
          msg: "User found!",
          result
        })
      }
      res.status(500).send({
        msg: "User was not found",
        result
      })
    } catch (err) {
      res.status(500).send({
        msg: "User was not found",
        err
       });
    }
  }
  exports.createUser = async (req, res) => {
    try {
      const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
      });
      const result = await user.save()
      if (result) {
        return res.status(201).send({
          msg: "User created",
          createdUser: {
            irl: `http://localhost:3000/users/${result._id}`,
            result
          }
        });
       }
       res.status(500).send({
        msg: "User was not updated"
       });
    } catch (err) {
      res.status(500).send({
        msg: "User was not updated",
        err
       });
    }
  };

  exports.UpdateUser = async (req, res) => {
    try {
      const update = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
      };
      const result = await User.findByIdAndUpdate(req.params.id, update)
      if (result) {
        return res.status(201).send({
          msg: "User updated",
          UpdatedUser: {
            irl: `http://localhost:3000/users/${result._id}`,
            result
          }
        });
       }
       res.status(500).send({
        msg: "User was not updated"
       });
    } catch (err) {
      res.status(500).send({
        msg: "User was not updated",
        err
       });
    }
  }
  exports.PatchUser = (req, res) => {
    res.send('respond with a resource');
  }
  exports.DeleteUser = async (req, res) => {
    try{
      const result = await User.findByIdAndDelete(req.params.id);
      if (result) {
        return res.status(200).send({
          msg: "User deleted",
        });
      }
      res.status(500).send({
       msg: "User was not deleted"
      });
     } catch (err) {
      res.status(500).send({
        msg: "User was not deleted",
        err
       });
    }
  }