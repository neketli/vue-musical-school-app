const Router = require("express");
const router = new Router();
const usersController = require("../controller/users.controller");
const jwtAuthMiddleware = require("../middleware/auth");

router.post("/users", jwtAuthMiddleware, usersController.createUsers);
router.get("/users/:id", jwtAuthMiddleware, usersController.getUsers);
router.get("/users", jwtAuthMiddleware, usersController.getAllUsers);
router.put("/users/:id", jwtAuthMiddleware, usersController.updateUsers);
router.delete("/users/:id", jwtAuthMiddleware, usersController.deleteUsers);

module.exports = router;
