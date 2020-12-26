module.exports =  userController = {
    index: (request, response) => {
        response.json({
            message: 'All users',
            data: [
                {
                    name: 'abdul',
                    age: 18
                },
                {
                    name: 'hafiz',
                    age: 18
                },
                {
                    name: 'ramadan',
                    age: 18
                },
            ],
            method: request.method
        });
    },
    show: (request, response) => {
        const userId = request.params.userId;
        response.send(`detail user with id : ${userId}`);
    },
    store: (request, response) => {
        response.json({
            message: 'All users',
            data: {
                name: 'ucup',
                age: 18
            },
            method: request.method
        })
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