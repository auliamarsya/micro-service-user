const { User } = require('../../../models');

module.exports = async (req, res) => {
    const userIds = req.query.user_ids || [];

    const queryOptions = {
        attributes: ['id', 'email', 'name', 'role', 'profession', 'avatar']
    }

    if(userIds.length){
        queryOptions.where = {
            id: userIds
        }
    }

    const user = await User.findAll(queryOptions);

    if(!user){
        return res.status(404).json({
            status: 'error',
            message: 'user not found'
        })
    }

    return res.json({
        status: 'success',
        data: user
    })
}