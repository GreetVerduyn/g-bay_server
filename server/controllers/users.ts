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


export default { getUsers};

