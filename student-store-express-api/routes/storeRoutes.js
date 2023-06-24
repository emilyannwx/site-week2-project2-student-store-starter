const express = require ("express")
const store = require("../models/store")
const router = express.Router()


router.get("/", async (req,res, next) => {

    console.log("I am working")
    try {
        const products = await store.getProducts()
        return res.status(200).json({products})
    } catch (err){
        next(err)
    }
})

module.exports = router
