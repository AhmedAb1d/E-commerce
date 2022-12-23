const User = require("../Models/userSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const SECRET = require('../middlewares/secret');

exports.signup = (req, res) => {
  const user = new User({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
  });
  user
    .save()
    .then((user) => {
      const token = jwt.sign(
        { id: user._id, email: user.email },
        SECRET,
        { expiresIn: '24h' }
      );
      res.status(200).json({ success: "success", token: token });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email }).then(
      (user) => {
        if (!user) {
          return res.status(401).json({
            error: 'User not found!'
          });
        }
        bcrypt.compare(req.body.password, user.password).then(
          (valid) => {
            if (!valid) {
              return res.status(401).json({
                error: 'Incorrect password!'
              });
            }
            const token = jwt.sign({id: user._id, email: user.email},SECRET,
                { expiresIn: '24h' });
            res.status(200).json({
              userId: user._id,
              token: token
            });
          }
        ).catch(
          (error) => {
            res.status(500).json({
              error: error
            });
          }
        );
      }
    ).catch(
      (error) => {
        res.status(500).json({
          error: error
        });
      }
    );
  }