exports.responseSuccess = (res, status_code, message, data) => {
    const response = {
        status_code: status_code,
        message: message,
        data: data
    }
    res.json(response)
}

exports.responseError = (res, status_code, message) => {
    const response = {
        status_code: status_code,
        message: String(message)
    }
    res.json(response)
}
