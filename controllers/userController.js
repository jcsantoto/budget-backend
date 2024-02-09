
exports.createUser = async (req, res) => {

    try {
        const supabase = req.supabase;

        // Use the Supabase client to query the database
        const { data, error } = await supabase
        .from('users')
        .insert([
            { id: '1',  username: "John"},
        ])

        if (error) {
          throw error;
        }

        // Send the retrieved data as a response
        res.json(data);
    }

    catch (error) {
        console.error(error);
        res.status(500).send('Error fetching users from the database');
    }

};