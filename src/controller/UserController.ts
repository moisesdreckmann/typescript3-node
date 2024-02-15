import express, { Response, Request, response } from 'express';
import { UserService } from '../services/UserService';


export class UserController {
    createUser = (request: Request, response: Response) => {
        const userService = new UserService
        const user = request.body;

        if(user.email == "" || user.email == null) {
            return response.status(400).json({message: 'user invalid'})
        }
        userService.createUser(user.name, user.email)
        return response.status(201).json({ message: 'user criado' });
    }

    getUsers = (request: Request, response: Response) => {
        const userService = new UserService
        const users = userService.getUsers()
        return response.status(200).json({users})
    }
 }