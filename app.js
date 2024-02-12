const express = require('express');
const app = express();
require('dotenv').config();


const { createClient } = require('@supabase/supabase-js');

// Supabase
const supabaseUrl = 'https://hnmgjxxozwjjdzgtdbuw.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey)

app.use((req, res, next) => {
  req.supabase = supabase;
  next();
});


app.use(express.json());

// mount routes
app.use('/api', require('./routes/api'));


// start server
if (!process.env.JEST_WORKER_ID) {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log('Server is running on port ${port}');
      console.log('http://localhost:3000/');
    });
}

module.exports = app