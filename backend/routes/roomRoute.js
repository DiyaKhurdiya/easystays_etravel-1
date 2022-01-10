const express = require("express");
const {
  getAllRooms,
  createRoom,
  updateRoom,
  deleteRoom,
  getRoomDetails,
} = require("../controllers/roomController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/rooms").get(getAllRooms);
router.route("/room/new").post(isAuthenticatedUser, authorizeRoles("admin"), createRoom);
router
  .route("/room/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateRoom)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteRoom)
  .get(getRoomDetails);

module.exports = router;
