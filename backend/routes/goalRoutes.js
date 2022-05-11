const express = require("express")
const router = express.Router()
const { protect } = require("../middleware/authMiddleware")
const { getGoals, setGoal, updateGoal, deleteGoal } = require("../controllers/goalController")

router.get("/", protect, getGoals)

router.post("/", protect, setGoal)

router.put("/:id", protect, updateGoal)

router.delete("/:id", protect, deleteGoal)

// In CommonJS, the module.exports is the default export.
// when you export routes, You should always use module.exports instead of exports or export.
// because module.exports is a single object, and exports is an array.
// incorrect syntax:
// module.export = router

// correct syntax:
module.exports = router