import { createContext, useContext, useState } from "react"
import { registerRequest, loginRequest } from "../api/auth.js"


export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [errors, setErrors] = useState([])

    const signup = async (user) => {
        try {
            const res = await registerRequest(user)
            console.log(res.data)
            setUser(res.data)
            setIsAuthenticated(true)
        } catch (error) {
            setErrors(error.response.data)
        }
    }

    const signin = async (user) => {
        try {
            const res = await loginRequest(user)
            console.log(res)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <AuthContext.Provider value={{
            signup,
            signin,
            user,
            setUser,
            isAuthenticated,
            errors
        }}>
            {children}
        </AuthContext.Provider>
    )
}