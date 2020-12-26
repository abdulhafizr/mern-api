module.exports =  userController = {
    get: (request, response) => {
        response.send('all users');
    },
    post: (request, response) => {
        response.send('user has created');
    }
}