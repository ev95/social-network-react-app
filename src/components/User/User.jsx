import { NavLink } from 'react-router-dom'
import './User.css'

function User({ user }) {
    return (
        <div className="user-card">
            <img src={user?.photos?.large ? user?.photos?.small : 'https://media.istockphoto.com/id/1330180806/vector/blue-sign-design-for-photo-placeholder-on-app-design-user-interface-design-avatar-placeholder.jpg?s=612x612&w=0&k=20&c=jMgBjBh-shvWi0ojpkHSMFnTS9vLXFBKws_VLFhK2eo='} alt="User 1" className="user-image" />
            <div className="user-info">
                <h3 className="user-name">
                    <NavLink to={`/users/${user.id}`}>{user?.name}</NavLink>
                </h3>
                <p className="user-id">ID: {user?.id}</p>
            </div>
        </div>
    )
}

export default User