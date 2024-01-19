const User = require("../models/user-model");
const bcrypt = require("bcryptjs");  
//Home

const home = async (req, res) => {
    try {
        res.status(200).send("Wlocome to world best using router")
    } catch (error) {
        console.log(error);
    }
};

//register

const register = async (req, res) => {
    try {
        console.log(req.body);
        const { email, password } = req.body;
        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({ msg: "email already exists" });
        }

        // has the password
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password, saltRound);


        const userCreated = await User.create({ email, password });
        res.status(201).json({
            msg: "Resgistration successful",
            token: await userCreated.generateToekn(),
        });
    } catch (error) {
        // res.status(500).json({ meg: "page not found" });
        next(error);
    }
};


//Login 

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await User.findOne({ email });
        console.log(userExist);
        if (!userExist) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const user = await bcrypt.compare(password,userExist.password);
        if (user) {
            res.status(200).json({
                message: "Login successful",
                token: await userExist.generateToekn(),
            });
        } else {
            res.status(401).json({ message: "Invaild email and password" });
        }

    } catch (error) {
        res.status(500).json("Internal server error" );
    }
};


module.exports = { home, register, login };