module.exports =  userController = {
    index: (request, response) => {
        response.send('all users');
    },
    show: (request, response) => {
        const userId = request.params.userId;
        response.send(`detail user with id : ${userId}`);
    },
    store: (request, response) => {
        response.send('user has created');
    },
    update: (request, response) => {
        const userId = request.params.userId;
        response.send(`user with id : ${userId} has updated`)
    },
    destroy: (request, response) => {
        const userId = request.params.userId;
        response.send(`user with id : ${userId} has deleted`)
    }
}