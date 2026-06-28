import "./post.css"

function PostHeader({ post }) {
    return (
        <div className="post-header">
            <div 
                className="avatar" 
                style={{ backgroundColor: post.user.avatarColor }}
            >
                {post.posts[0].user.initials}
            </div>
            
            <div className="post-info">
                <h4 className="username">{post.posts[0].user.name}</h4>
                <p className="handle-time">
                    {post.posts[0].user.handle} • {post.posts[0].user.time}
                </p>
            </div>

            <div 
                className="language-badge"
                style={{ 
                    backgroundColor: post.posts[0].languageBg, 
                    color: post.posts[0].languageColor 
                }}
            >
                {post.posts[0].language}
            </div>
        </div>
    );
}

export default PostHeader;