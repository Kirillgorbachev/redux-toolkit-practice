export const UserItem = ({user}) => {
    return (
        <div>
            {user.id} . {user.name}
            <button>DELETE</button>
        </div>
    )
}