const User = require('../../models/user/user')
const { Op } = require('sequelize')

exports.getUsers = async (req) => {
    if (req.body.search) {
        return await User.findAll({
            where: {
                name: {
                    [Op.like]: `%${req.body.search}%`
                }
            },
            order: [
                ['name', 'ASC']
            ]
        })
    }

    return await User.findAll({
        order: [
            ['name', 'ASC']
        ]
    })
}

exports.createUser = async (req) => {
    return await User.create({
        name: req.body.name,
        birth_place: req.body.birth_place,
        birth_date: req.body.birth_date,
        address: req.body.address
    })
}

exports.findUser = async (req) => {
    const user = await User.findByPk(req.params.id)

    if (!user) {
        throw new Error('User not found', 404)
    }
    return user
}

exports.updateUser = async (req, user) => {
    return await user.update({
        name: req.body.name,
        birth_place: req.body.birth_place,
        birth_date: req.body.birth_date,
        address: req.body.address
    })
}

exports.deleteUser = async (user) => {
    return await user.destroy()
}