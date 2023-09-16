

export async function createPost(post: any){

    let query = `INSERT INTO posts (title, content, user_id) VALUES ('${post.title}', '${post.content}', ${post.user_id})`;
    
}