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
            res.send("same email");
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
          


};

exports.updateUser = async (req, res) =>{

};

exports.deleteUser = async (req, res) => {

};