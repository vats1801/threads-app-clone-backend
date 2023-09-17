
import db from '../config/database';
export async function createPost(post: any){

    let query = `INSERT INTO posts (title, content, user_id) VALUES ('${post.title}', '${post.content}', ${post.user_id})`;
    
    return await db.query(query);
}

export async function getPosts(){
    let query = `SELECT * FROM posts`;
    return await db.query(query);
}

export async function getPost(id: number){
    let query = `SELECT * FROM posts WHERE id = ${id}`;
    return await db.query(query);
}

export async function updatePost(id: number, post: any){

    let query = `UPDATE posts SET title = '${post.title}', content = '${post.content}' WHERE id = ${id}`;
    return await db.query(query);
}

export async function deletePost(id: number){
    let query = `DELETE FROM posts WHERE id = ${id}`;
    return await db.query(query);
}

