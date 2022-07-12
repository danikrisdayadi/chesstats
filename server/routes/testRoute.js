import express from 'express';
import asyncHandler from 'express-async-handler';

const testRouter = express.Router();

testRouter.route('/').get(testRoute)

export async function testRoute(req, res, next) {
    try {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json("Successful request!");
    } catch (err) {
        res.statusCode = 404;
        res.send(err);
    }
}
