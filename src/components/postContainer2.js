import { useEffect, useState } from "react";
import { postAPI } from "../Services/userService"
import { PostItem } from "./postItem";

export const PostContainer2 = () => {
    //const [limit, setLimit] = useState();
    // const {data: posts, error, isLoading, refetch} = postAPI.useFetchAllPostsQuery(5,  {
    //     pollingInterval: 2000
    // });

    const {data: posts, error, isLoading, refetch} = postAPI.useFetchAllPostsQuery(100);

    // useEffect ( () => {
    //     setTimeout (() => {
    //         setLimit(3);
    //     }, 2000 )
    // }, [])
    

    return (
        <div>
            {/* <button onClick={() => { refetch() }}>REFETCH</button> */}
            {isLoading && <h1>Загрузка данных с сервера...</h1>}
            {error && <h1>произошла ошибка при загрузке</h1>}
            {/* {posts && posts.map ( post =>
                <PostItem key={post.id} post={post}/>
            )} */}
        </div>
    )
}