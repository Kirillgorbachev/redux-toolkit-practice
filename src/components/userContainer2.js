import { userAPI } from "../Services/userService"
import { UserItem } from "./UserItem";

export const UserContainer2 = () => {
    //const {data: users} = userAPI.useFetchAllUsersQuery(10);
    const {data: users, error, isLoading} = userAPI.useFetchAllUsersQuery();
    console.log(error);

    return (
        <div>
            {isLoading && <h1>Загрузка данных с сервера...</h1>}
            {error && <h1>произошла ошибка при загрузке</h1>}
            {users && users.map ( user =>
                <UserItem key={user.id} user={user}/>
            )}
        </div>
    )
}