const {validationResult} = require('express-validator');
const blogModel = require('../models/blog');

module.exports = blogController = {
    store: (request, response) => {
        const errors = validationResult(request);

        if(!errors.isEmpty()) {
            const error = new Error("Request error");
            error.status = 400;
            error.data = errors.array();
            error.method = request.method;
            throw error;
        }

        const {title, body} = request.body;
        const {method} = request;
       
        blogModel.create({
            title,
            body,
            author: {
                uid: "jfnjwefuiwehfiwbefuwiwubfawue",
                name: "abdul hafiz ramadan"
            }
        }, (error, result) => {
            if(error) return console.log(error);
            response.status(201).json({
                message: "Blog created Successfully!",
                data: result,
                method,
                responseStatus: "Post Success"
            })
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