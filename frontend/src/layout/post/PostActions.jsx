


import "./post.css"
function PostActions({ post }) {
    return (
        <div className="post-actions">
            <button className="action-btn">❤️ {post.posts[0].likes}</button>
            <button className="action-btn">💬 {post.posts[0].comments}</button>
            <button className="action-btn">Save</button>
            <button className="action-btn">Share</button>
        </div>
    );
}

export default PostActions;