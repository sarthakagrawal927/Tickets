import express from "express"

const router = express.Router();

router.get('/api/user/currentuser', (req, res) => {
    res.send("Hi there!");
});

export { router as currentUserRouter };