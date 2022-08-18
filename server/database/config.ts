import { createPool, Pool } from 'mysql2/promise'

export async function connect(): Promise<Pool> {
    const connection = await createPool({
        host: 'localhost',
        port: 4306,
        user: 'scrum',
        password: 'scrum',
        database: 'scrum_project',
        connectionLimit: 10
    });
    return connection;
}