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

        if(!request.file) {
            const error = new Error("Request image error");
            error.status = 422;
            error.data = null;
            error.method = request.method;
            throw error;
        }

        const {title, body} = request.body;
        const image = request.file.path;
        const {method} = request;
       
        blogModel.create({
            title,
            image,
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
        blogModel.find({}, (error, blogs) => {
            if(error) {
                const error = new Error("Error on Server side");
                error.status = 500;
                error.data = null;
                error.method = request.method;
                throw error;
            }

            const {method} = request;
            response.status(200).json({
                message: "Request successfully",
                data: blogs,
                method
            })
        });
    },
    show: (request, response) => {
        
    },
    update: (request, response) => {
        
    },
    destroy: (request, response) => {
        
    },
}