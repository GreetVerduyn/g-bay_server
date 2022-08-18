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


export default { getUsers, getUser};

