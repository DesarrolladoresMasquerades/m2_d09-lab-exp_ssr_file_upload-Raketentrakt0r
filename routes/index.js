const router = require("express").Router();
//const post = requires("../models/post.model") to use the post routes and we need to define 
//const {findById} = require("../models.post.model")    the variable to find by Id


/* GET home page */
router.get("/", (req, res, next) => {
                        //Post.find()
  res.render("index"); // .then(res.render("index",{post}))
});

module.exports = router;
