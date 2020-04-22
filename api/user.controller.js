const UserDAO = require('../models/userDAO')
const bcrypt = require('bcrypt')

class UserController{
    static async login(req,res,next){
        const user  = await UserDAO.getUserByEmail(req.body.email)
        if(user.length == 0){
            return res.status(401).json({
                message:"no existe el usuario"
            })
        }
        // bcrypt(req.body.password,user[0].password,(err,result)=>{
        //     if(err){
        //         return res.status(401).json({
        //             message : "Auth fiel"
        //         })
        //     }
        //     if(result){
        //         return res.status(200).json({
        //             message:"auth successful"
        //         })
        //     }

        //     console.log("error en el login")
        // })
        console.log(user[0])
        return res.status(200).json(user)
        
    }
    static async signUP(req,res,next){

        const user = await UserDAO.createUser(req.body)
        console.log(user)

    }
}

module.exports = UserController