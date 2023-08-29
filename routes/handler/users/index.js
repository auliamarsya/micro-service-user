const register = require('./register');
const login = require('./login');
const logout = require('./logout');
const update = require('./update');
const getUser = require('./getUser');
const getUserAll = require('./getUserAll');

module.exports = {
    register,
    login,
    update,
    getUser,
    getUserAll,
    logout
}