import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import { createAccessToken } from "../libs/jwt.js";
import token from 'jsonwebtoken'

export const register = async (req, res) => {

    const { username, email, password, image } = req.body;

    try {

        const userFound = await User.findOne({ where: { email: email } })
        if (userFound)
            return res.status(400).json(["The email is already in use"])

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            image
        })

        const userSaved = await newUser.save()

        await createAccessToken({ id: userSaved.id })
        res.cookie('token', token)
        res.json({
            message: "User created successfully",
            id: userSaved.id,
            username: userSaved.username,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt,
        })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

export const login = async (req, res) => {

    const { email, password } = req.body;

    try {
        const userFound = await User.findOne({ where: { email: email } })

        if (!userFound) return res.status(400).json({ message: "user not found" })

        const isMatch = await bcrypt.compare(password, userFound.password)

        if (!isMatch) return res.status(400).json({ message: "incorrect password" })


        const token = await createAccessToken({ id: userFound.id })

        res.cookie('token', token)
        res.json({
            message: "signed in",
            id: userFound.id,
            username: userFound.username,
            email: userFound.email,
            image: userFound.image,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt,
        })
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }

}

export const logout = (req, res) => {
    res.cookie('token', " ", {
        expires: new Date(0),
    })
    return res.sendStatus(200)
}

export const profile = async (req, res) => {

    const userFound = await User.findOne({ where: { id: req.user.id } })

    if (!userFound) return res.status(400).json({ message: "no se encontro el perfil" })

    return res.json({
        message: "Perfil del Usuario",
        id: userFound.id,
        username: userFound.username,
        email: userFound.email,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt,
    })
}