const bcrypt = require('bcrypt');
const saltRounds = 2;

// Function to hash password
const hashPassword = async(password) => {
    try {
        const hash = await bcrypt.hash(password, saltRounds);
        return hash;
    } catch (error) {
        throw error;
    }
}

const checkPassword = async(password, hashedPassword) => {
    try {
        const result = bcrypt.compare(password, hashedPassword);
        return result;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    hashPassword,
    checkPassword,
};