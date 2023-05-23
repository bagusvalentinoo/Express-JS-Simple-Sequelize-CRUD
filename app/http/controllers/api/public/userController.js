const userService = require('../../../../services/user/userService')
const { responseSuccess, responseError } = require('../../../../helpers/http/response')

exports.index = async (req, res) => {
    try {
        const users = await userService.getUsers(req)
        return responseSuccess(
            res,
            200,
            'Successfully get users data',
            users
        )
    } catch (err) {
        return responseError(
            res,
            500,
            err || 'Internal server error'
        )
    }
}

exports.create = async (req, res) => {
    try {
        await userService.createUser(req, res)
        return responseSuccess(
            res,
            201,
            'Successfully create user data'
        )
    } catch (err) {
        return responseError(
            res,
            500,
            err || 'Internal server error'
        )
    }
}

exports.show = async (req, res) => {
    try {
        const user = await userService.findUser(req)
        return responseSuccess(
            res,
            200,
            'Successfully get user data',
            user
        )
    } catch (err) {
        return responseError(
            res,
            500,
            err || 'Internal server error'
        )
    }
}

exports.update = async (req, res) => {
    try {
        const user = await userService.findUser(req)
        await userService.updateUser(req, user)
        return responseSuccess(
            res,
            200,
            'Successfully update user data'
        )
    } catch (err) {
        return responseError(
            res,
            500,
            err || 'Internal server error'
        )
    }
}

exports.destroy = async (req, res) => {
    try {
        const user = await userService.findUser(req)
        await userService.deleteUser(user)
        return responseSuccess(
            res,
            200,
            'Successfully delete user data'
        )
    } catch (err) {
        return responseError(
            res,
            500,
            err || 'Internal server error'
        )
    }
}