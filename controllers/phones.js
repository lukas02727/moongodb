const Phone = require("../models/phones");

exports.getAllPhones = async (req, res) => {
    try{
      const result = await Phone.find();
      if (result && result.length !== 0) {
          return res.status(200).send({
            msg: "Phones found!",
            result
          })
      }
     res.status(404).send({
      msg: "Phones were not found",
      result
     })
    } catch (err) {
      res.status(500).send({
        msg: "Phones were not found",
        err
       });
    }
  }
  exports.getPhoneById = async (req, res) => {
    try{
      const result = await Phone.findById(req.params.id);
      if (result) {
        return res.status(200).send({
          msg: "Phone found!",
          result
        })
      }
      res.status(500).send({
        msg: "Phone was not found",
        result
      })
    } catch (err) {
      res.status(500).send({
        msg: "Phone was not found",
        err
       });
    }
  }
  exports.createPhone = async (req, res) => {
    try {
      const phone = new Phone({
        name: req.body.name,
        os: req.body.os,
        brand: req.body.brand,
        cpu: req.body.cpu,
        ram: req.body.ram,
        camera: req.body.camera,
      });
      const result = await phone.save()
      if (result) {
        return res.status(201).send({
          msg: "Phone created",
          createdPhone: {
            irl: `http://localhost:3000/phones/${result._id}`,
            result
          }
        });
       }
       res.status(500).send({
        msg: "Phone was not updated"
       });
    } catch (err) {
      res.status(500).send({
        msg: "Phone was not updated",
        err
       });
    }
  };

  exports.UpdatePhone = async (req, res) => {
    try {
      const update = {
        name: req.body.name,
        os: req.body.os,
        brand: req.body.brand,
        cpu: req.body.cpu,
        ram: req.body.ram,
        camera: req.body.camera,
      };
      const result = await Phone.findByIdAndUpdate(req.params.id, update)
      if (result) {
        return res.status(201).send({
          msg: "Phone updated",
          UpdatedUser: {
            irl: `http://localhost:3000/phones/${result._id}`,
            result
          }
        });
       }
       res.status(500).send({
        msg: "Phone was not updated"
       });
    } catch (err) {
      res.status(500).send({
        msg: "Phone was not updated",
        err
       });
    }
  }
  exports.PatchPhone = async (req, res) => {
    try {
      const update = {};
      for (const ops of req.body) {
        update[ops.propName] = ops.value;
      }
  const result = await Phone.findByIdAndUpdate(req.params.id, update)
  if (result) {
    return res.status(200).send({
      msg: "Phone patched",
      url: `https://localhost:3000/phones/${req.params.id}`
    })
    
  }
  res.status(500).send({
    msg: "Phone was not patched",
    err
   });
    } catch (err) {
      res.status(500).send({
        msg: "Phone was not patched",
        err
       });
    }
  };
  exports.DeletePhone = async (req, res) => {
    try{
      const result = await Phone.findByIdAndDelete(req.params.id);
      if (result) {
        return res.status(200).send({
          msg: "Phone deleted",
        });
      }
      res.status(500).send({
       msg: "Phone was not deleted"
      });
     } catch (err) {
      res.status(500).send({
        msg: "Phone was not deleted",
        err
       });
    }
  }