

import { useState } from "react";
import "./post.css";

function PostContent({ post }) {
    const [showCode, setShowCode] = useState(true); 

    const currentPost = post.posts ? post.posts[0] : post; 

    return (
        <div className="post-content">
            <h3 className="post-title">{currentPost.title}</h3>
            {currentPost.description && (
                <p className="post-description">{currentPost.description}</p>
            )}

            {/* Code Section with Toggle */}
            {currentPost.code && (
                <div className="code-section">
                    <div className="code-header">
                        <span className="code-title">{currentPost.language} Code</span>
                        <button 
                            className="toggle-code-btn"
                            onClick={() => setShowCode(!showCode)}
                        >
                            {showCode ? "Hide Code" : "Show Code"}
                        </button>
                    </div>

                    {showCode && (
                        <pre className="code-block">
                            <code>{currentPost.code}</code>
                        </pre>
                    )}
                </div>
            )}
        </div>
    );
}

export default PostContent;