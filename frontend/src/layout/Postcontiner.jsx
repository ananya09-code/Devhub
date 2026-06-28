import PostHeader from "./post/PostHeader.jsx";
import PostContent from "./post/PostContent.jsx";
import PostActions from "./post/PostActions.jsx";
import './css/postcontainer.css';

function PostContainer({ posts }) {
    return (
        <div className="post-container">
            <PostHeader post={posts} />
            <PostContent post={posts} />
            <PostActions post={posts} />
        </div>
    );
}

export default PostContainer;