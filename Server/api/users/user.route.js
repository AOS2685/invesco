const { createUser,getUsersbyUser_Email,getUsers,updateUsers,deleteUsers,login } = require("./user.controller.js");
const router = require("express").Router();
const {checkToken} = require("../../authorise/tokenVal")

// router.post("/", checkToken, createUser);
// router.get("/", checkToken, getUsers);
// router.get("/", checkToken, getUsersbyUser_Email);
// router.patch("/", checkToken, updateUsers);
// router.delete("/", checkToken, deleteUsers);
// router.post("/login",login);

router.post("/", createUser);
router.get("/", getUsers);
router.get("/", getUsersbyUser_Email);
router.patch("/", updateUsers);
router.delete("/", deleteUsers);
router.post("/login",login);

module.exports = router;
