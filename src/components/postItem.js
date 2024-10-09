import { postAPI } from "../Services/userService";

export const PostItem = ({post}) => {
    const [updatePost, {}] = postAPI.useUpdatePostMutation();
    const [deletePost, {}] = postAPI.useDeletePostMutation();

    const handleRemove = (event) => {
        event.stopPropagation();
        deletePost(post);
    }

    const handleUpdate = (event) => {
        const title = prompt() || "";
        updatePost({...post, title});
    }

    return (
        <div onClick={handleUpdate}>
            {post.id} . {post.title}
            <button onClick={handleRemove}>DELETE</button>
        </div>
    )
}