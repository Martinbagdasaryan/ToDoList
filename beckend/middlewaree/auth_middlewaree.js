import Jwt from "jsonwebtoken";

const AuthMiddlewaree = (req,res,next) => {
    if (req.method === "OPTIONS") {
        next()
    }
    try{
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
         return res.status(403).json({message: "polzvtel chka"})
        }
        const decodedData = Jwt.verify(token,process.env.SECRET)
        req.user = decodedData
        next()
    }catch(e){
        next(e)
    }
};

export default AuthMiddlewaree