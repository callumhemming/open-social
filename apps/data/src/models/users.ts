import {sql} from "../db"

export async function getAllUsers(){
    const users = await sql`
    SELECT * FROM users
    `
    return users
} 


