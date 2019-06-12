const express = require('express');
const bodyParser = require('body-parser');

const postModel = require('../model/posts.js');
const checkModel = require('../model/check.js');
const router = express.Router();

router.use(bodyParser.json());

router.get('/lists', function(req, res, next) {
    if(!req.query.category) {
        const err = new Error('Someting wrong with query');
        err.status = 400;
        throw err;
    }
    postModel.list(req.query.category).then(posts => {
        res.json(posts);
    }).catch(err => {
        res.json([]);
        console.log(err);
    });
});

router.get('/keys', function(req, res, next) {
    postModel.getKeys().then(keys => {
        let dataKeys = keys.map(data => data.name);
        res.json(dataKeys);
    }).catch(err => {
        res.json([]);
        console.log(err);
    });
});

router.post('/posts/category/:name', function(req, res, next) {
    if(!req.params.name) {
        const err = new Error('Someting wrong with name param');
        err.status = 400;
        throw err;
    }
    postModel.createCategory(req.params.name).then(posts => {
        res.json(posts.name);
    }).catch(next);
});

router.post('/posts/todo', function(req, res, next) {
    const {category, title, description, deadline, remark, important} = req.body;
    if(!category || !title) {
        const err = new Error('Someting wrong with body');
        err.status = 400;
        throw err;
    }
    postModel.addTodo(category, title, description, deadline, remark, important).then(post => {
        res.json(post);
    }).catch(next);
});

router.post('/posts/check', function(req, res, next) {
    const {category, id} = req.body;
    if(!category || !id) {
        const err = new Error('Someting wrong with body');
        err.status = 400;
        throw err;
    }
    checkModel.checkTodo(category, id).then(data => {
        console.log(data);
        res.json(data);
    }).catch(next);
});

router.post('/posts/important', function(req, res, next) {
    const {category, id} = req.body;
    if(!category || !id) {
        const err = new Error('Someting wrong with body');
        err.status = 400;
        throw err;
    }
    checkModel.checkImportant(category, id).then(posts => {
        res.json(posts);
    }).catch(next);
});

router.post('/posts/delete', function(req, res, next) {
    const {category, id} = req.body;
    if(!category || !id) {
        const err = new Error('Someting wrong with body');
        err.status = 400;
        throw err;
    }
    checkModel.deleteTodo(category, id).then(data => {
        res.json(data);
    }).catch(next);
});

router.post('/posts/deleteCategory/:name', function(req, res, next) {
    if(!req.params.name) {
        const err = new Error('Someting wrong with name param');
        err.status = 400;
        throw err;
    }
    checkModel.deleteCategory(req.params.name).then(data => {
        res.json(data);
    }).catch(err => {
        console.log(err);
        res.json([]);
    });
});


module.exports = router;
