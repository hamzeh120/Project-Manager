const router = require("express").Router();
const { authRoutes } = require("./auth");
const { projectRoutes } = require("./projects");
const { teamRoutes } = require("./teams");
const { userRoutes } = require("./users");

router.use("/project", projectRoutes);
router.use("/team", teamRoutes);
router.use("/user", userRoutes);
router.use("/auth", authRoutes);

module.exports = {
    AllRoutes : router
}