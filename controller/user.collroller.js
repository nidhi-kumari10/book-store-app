import User from '../model/user.model.js';
import bcrypt from 'bcryptjs';

export const sigup = async (req,res)=>{

    try {
   const {fullname, emailId, password} = req.body;
      if (!fullname || !emailId || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
   const user = await User.findOne({emailId});
   if(user){
    return res.status(400).json({message: "User already exists"})
   }
   const hashpassword = await bcrypt.hash(password,10)
   const createdUser =new User({
    fullname: fullname,
    emailId: emailId,
    password: hashpassword
   })
  await createdUser.save();
   res.status(201).json({message:"User registered successfully!", user:{
    _id: createdUser._id,
    fullname: createdUser.fullname,
    emailId: createdUser.emailId
   }});

    } catch (error) {
        console.log("Error: "+ error.message);
        res.status(500).json({message: "Internal server error"});
    }
};

export const login = async (req, res)=>{

    try {
         const {emailId, password} = req.body;
           if (!emailId || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
           const user = await User.findOne({emailId});
             if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
           const isMatch = await bcrypt.compare(password, user.password);
          
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        fullname: user.fullname,
        emailId: user.emailId
      }
    });
       
    } catch (error ) {
        console.log("Error: "+error.message);
         res.status(500).json({message: "Internal server error"});
    }
}

