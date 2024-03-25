const { emit } = require('../app');
const passwordUtil = require('../utils/passwordUtil');

exports.createUser = async (req, res) => {
    try {
        const supabase = req.supabase;
        const bodyData = req.body;

        // Get user data from body
        username = bodyData.username;
        email = bodyData.email;
        password = bodyData.password;

        // Check for empty parameter
        if(!username || !email || !password){
            throw new Error("Missing information");
        }

        hashedPassword = await passwordUtil.hashPassword(password);

        // Insert new user into database
        const { data, error } = await supabase
        .from('users')
        .insert([
            {username: username, email: email, password_hash: hashedPassword},
        ]);

        if (error) {
          throw error;
        }

        res.send("Successfully Added User");

    }

    catch (error) {
        res.status(500).send(error);
    }

};

exports.getUser = async (req, res) => {
    try {
        const supabase = req.supabase;
        const bodyData = req.body;

        email = bodyData.email;

        const { data, error } = await supabase
            .from('users')
            .select('username')
            .eq('email', email);

            if (error) {
                throw error;
            }
    
            res.send(data);
        }

    catch (error){
        res.status(500).send(error);
    }


};

exports.updateUsername = async (req, res) =>{
    try{
        const supabase = req.supabase;
        const bodyData = req.body;

        email = bodyData.email;
        newUsername = bodyData.newUsername;

        const {data, error} = await supabase
        .from('users')
        .update({'username': newUsername})
        .eq('email', email);
        res.send("Successfully updated username");
    }

    catch (error){
        res.status(500).send(error);
    }
};

exports.updateEmail = async (req, res) =>{
    try{
        const supabase = req.supabase;
        const bodyData = req.body;

        email = bodyData.email;
        newEmail = bodyData.newEmail;

        const {data, error} = await supabase
        .from('users')
        .update({'email': newEmail})
        .eq('email', email);
        res.send("Successfully updated email");
    }

    catch (error){
        res.status(500).send(error);
    }
};

exports.updatePassword = async (req, res) =>{
    try{
        const supabase = req.supabase;
        const bodyData = req.body;

        email = bodyData.email;
        newPassword = bodyData.newEmail;

        hashedPassword = await passwordUtil.hashPassword(newPassword);


        const {data, error} = await supabase
        .from('users')
        .update({'password_hash': hashedPassword})
        .eq('email', email);
        res.send("Successfully updated password");
    }

    catch (error){
        res.status(500).send(error);
    }
};

exports.deleteUser = async (req, res) => {
    try{
        const supabase = req.supabase;
        const bodyData = req.body;

        email = bodyData.email;

        const {data, error} = await supabase
        .from('users')
        .delete()
        .eq('email', email);
        res.send("Successfully Deleted User");

    }
    catch(error){
        res.status(500).send(error);
    }
};