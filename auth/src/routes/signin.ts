import express from "express"

const router = express.Router();

router.post('/api/user/signin', (req, res) => {
    res.send("Hi there!");
});

export { router as signinRouter };