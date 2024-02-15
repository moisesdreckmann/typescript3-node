import { Router, request } from "express";
import  {UserController}  from './controller/UserController';
import express, { Response, Request } from 'express';

export const router = Router()
const userController = new UserController();

router.post('/user', userController.createUser);
router.get('/user', userController.getUsers)
router.delete('/user', (request: Request, response: Response) => {
    const user = request.body;
    console.log('deletando...', user);
    return response.status(200).json({ message: 'usuario deletado..', user });
});
