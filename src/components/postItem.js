export const PostItem = ({post, remove, update}) => {

    const handleRemove = (event) => {
        event.stopPropagation();
        remove(post);
    }

    const handleUpdate = (event) => {
        const title = prompt() || "";
        update({...post, title});
    }

    return (
        <div onClick={handleUpdate}>
            {post.id} . {post.title}
            <button onClick={handleRemove}>DELETE</button>
        </div>
    )
}