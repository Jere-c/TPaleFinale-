import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../../config.js'

export const authRequiere = (req, res, next) => {

    const { token } = req.cookies
    if (!token)
        return res.status(401).json({ message: "no token, autorizacion denegada" })

    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if (err) return res.statud(403).json({ message: "invalid token" })

        req.user = user

        next()
    })


}