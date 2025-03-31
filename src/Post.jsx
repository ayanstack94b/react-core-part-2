export default function Post({ post }) {
    // console.log(post)
    return (
        <div className="card">
            <h5>Title: {post.title}</h5>
            <p>{post.body}</p>
        </div>
    )
}