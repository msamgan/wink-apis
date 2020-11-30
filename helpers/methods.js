exports.successResponse = (message, payload) => {
    return {
        status: true,
        message: message,
        package: payload
    }
}