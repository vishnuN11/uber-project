const captainModel = require("../models/captain.model")
const captainService = require("../services/captain.service")
const { validationResult } = require("express-validator")

module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { fullname, email, password, vehicle } = req.body
    const isCaptainAlreadyExist=await captainModel.findOne({email})
    if (isCaptainAlreadyExist) {
        return res.status(400).json({message:"Captain already exist"})
    }
    const hashPassword = await captainModel.hashPassword(password)
    const captain = await captainyService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashPassword,
        color: vehicle.color,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    })
    const token = captainModel.generateAuthToken()
    res.status(201).json({ token, captain })
}