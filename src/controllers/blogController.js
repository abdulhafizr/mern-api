module.exports = blogController = {
    store: (request, response) => {
        const {method} = request;
        const {title, image, body} = request.body;
        response.status(201).json({
            message: "Blog created Successfully!",
            data: {
                title,
                image,
                body,
            },
            method,
            responseStatus: "Post Success"
        })
    },
    index: (request, response) => {
        
    },
    show: (request, response) => {
        
    },
    update: (request, response) => {
        
    },
    destroy: (request, response) => {
        
    },
}