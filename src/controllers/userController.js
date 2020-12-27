module.exports =  userController = {
    register: (request, response, next) => {
        const {email, password} = request.body;
        const {method} = request;
        response.status(201).json({
            message: 'Register Successfully',
            data: {
                email,
                password
            },
            method,
            responseStatus: "CREATED"
        })
        next();
    },
    login: (request, response, next) => {
        const {email, password} = request.body;
        const {method} = request;
        response.status(200).json({
            message: "Login Successfully",
            data: {
                email,
                password
            },
            method,
            responseStatus: "Call API Successfully"
        })
        next();
    },
    update: (request, response, next) => {
        const {userId} = request.params;
        response.send(`user with id : ${userId} has updated`)
        next();
    },
    destroy: (request, response, next) => {
        const {userId} = request.params;
        const {email, password} = request.body;
        const {method} = request;
        response.status(200).json({
            message: "Use delete Successfully",
            data: {
                email,
                password
            },
            method,
            responseStatus: "DELETED"
        })
        next();
    }
}