const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User=  require("../models/userModel");
//@decs Register the users
//@route POST /api/users/register
//@access public

const registerUser =  asyncHandler(async  (req, res) =>{
    const{ username, email, password}= req.body;
    if(!username ||  !email || !password){
        return res.status(400);
        throw  new Error("Please provide all fields");
    }
    const userAvailable =await User.findOne( { email: email} );
    if(userAvailable ) {
       return res.status(400);
       throw  new Error ("User already registered!");
   }
   // hash password
   const hashedPassword = await bcrypt.hash(password, 10);
   console.log("Hassed Password:", hashedPassword);
   const user  =  await User.create({
       username ,
       email ,
       password : hashedPassword
   });
   console.log(`User created ${user}`);
   if(user){
    res.status(201).json({_id: user.id, email: user.email});
   }else{
    res.status(400);
    throw new Error("User data is not valid");
   }
   res.json({ message:"Register the user"});
});

//@decs Login users
//@route POST /api/users/login
//@access public

const loginUser =  asyncHandler(async  (req, res) =>{
    res.json({ message: "Login user"});
});


//@decs Current use Info
//@route GET /api/users/current
//@access public

const currentUser =  asyncHandler(async  (req, res) =>{
    res.json({ message: "current user Information"});
});


module.exports ={
    registerUser,
    loginUser,
    currentUser
}