import { NavLink } from 'react-router-dom'
import './User.css'
import { followUserThunk, unFollowUserThunk } from '../../store/profileReducer'
import { useDispatch } from 'react-redux'
import { useState } from 'react';

function User({ user }) {
    const dispatch = useDispatch();
    const [followed, setFollowed] = useState(user.followed)

    function follow(id) {
        dispatch(followUserThunk(id));
        setFollowed(true);
    }

    function unfollow(id) {
        dispatch(unFollowUserThunk(id));
        setFollowed(false);
    }
    return (
        <div className="user-card">
            <img src={user?.photos?.large ? user?.photos?.small : 'https://media.istockphoto.com/id/1330180806/vector/blue-sign-design-for-photo-placeholder-on-app-design-user-interface-design-avatar-placeholder.jpg?s=612x612&w=0&k=20&c=jMgBjBh-shvWi0ojpkHSMFnTS9vLXFBKws_VLFhK2eo='} alt="User 1" className="user-image" />
            <div className="user-info">
                <h3 className="user-name">
                    <NavLink to={`/users/${user.id}`}>{user?.name}</NavLink>
                </h3>
                <p className="user-id">ID: {user?.id}</p>
                {
                    followed ?
                        <button className='unfollow' onClick={() => unfollow(user.id)}>Unfollow</button>
                        :
                        <button className='follow' onClick={() => follow(user.id)}>Follow</button>
                }
            </div>
        </div>
    )
}

export default User