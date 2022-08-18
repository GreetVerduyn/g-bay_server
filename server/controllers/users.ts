import { Request, Response, NextFunction } from 'express';
import {connect} from "../database/config";
import {User} from "../types/user";

// getting all users
const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const conn = await connect();
        const users = await conn.query('SELECT * FROM users');
        return res.json(users[0]);
    }
    catch (e) {
        console.log(e)
    }
};

// getting a single user
const getUser = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    try {
        const conn = await connect();
        const users = await conn.query('SELECT * FROM users WHERE ID = ?', [id]);
        return res.json(users[0]);
    }
    catch (e) {
        console.log(e)
    }
};

// updating a user
const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    const updateUser: User = req.body;
    // return response
    try {
        const conn = await connect();
        const users = await conn.query('UPDATE users set ? WHERE ID = ?', [updateUser, id]);
        return res.json(users[0]);
    }
    catch (e) {
        console.log(e)
    }
};

// deleting a user
const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    try {
        const conn = await connect();
        await conn.query('DELETE FROM users WHERE ID = ?', [id]);
        res.json({
            message: 'User deleted'
        });
    }
    catch (e) {
        console.log(e)
    }
};

// adding a user
const addUser = async (req: Request, res: Response, next: NextFunction) => {
    const newUser: User = req.body;
    console.log('add', newUser);
    // return response
    try {
        const conn = await connect();
        await conn.query('INSERT INTO users set ?', [newUser]);
        res.json({
            message: 'New User Created',
        });
    }
    catch (e) {
        console.log(e)
    }
};

export default { getUsers, getUser, updateUser, deleteUser, addUser };
