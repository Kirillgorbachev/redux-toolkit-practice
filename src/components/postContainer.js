import { postAPI } from "../Services/userService"
import { PostItem } from "./postItem";

export const PostContainer = () => {
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(100);
    const [createPost, {}] = postAPI.useCreatePostMutation();
    const [updatePost, {}] = postAPI.useUpdatePostMutation();
    const [deletePost, {}] = postAPI.useDeletePostMutation();

    const handleCreatePost = async () => {
        const title = prompt();
        await createPost({title, body: title})
    }

    function handleRemove (post) {
        deletePost(post);
    }

    const handleUpdate = (post) => {
        updatePost(post)
    }

    return (
        <div>
            <button onClick={handleCreatePost}>Создать post</button>
            {isLoading && <h1>Загрузка данных с сервера...</h1>}
            {error && <h1>произошла ошибка при загрузке</h1>}
            {posts && posts.map ( post =>
                <PostItem key={post.id} post={post} remove={handleRemove} update={handleUpdate}/>
            )}
        </div>
    )
}