const jwt = require("jsonwebtoken")
const asynchandler = require("express-async-handler")
const User = require("../models/userModal")
require('dotenv').config()

const protect = asynchandler(async (req, res, next) => {
    // console.log(req.headers.authorization);
    // let token = "";
    // console.log(token, "token");
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get Token From Header
            // token = req.headers.authorization.split(' ')[1]

            // verify token
            const decode = jwt.verify(req.headers.authorization.split(' ')[1], process.env.JWT_SECRET)

            // Get user from the token
            req.user = await User.findById({ _id: decode.id }).select('-password')

            next()

        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error("Not Autherized")
        }
    } else {
        res.status(401)
        throw new Error("Not Autherized, no Token")
    }
})

module.exports = { protect }
// bearer sdmkjlhsdgjsdfhjkfsdhk