import { useEffect } from 'react'
import './Users.css'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersThunk } from '../../store/userReducer';
import User from '../../components/User/User';
import Pagination from '../../components/Pagination/pagination';

function Users() {
    const dispatch = useDispatch();
    const { users, page, usersPerPage, totalUsers } = useSelector((state) => state.usersState)

    useEffect(() => {
        dispatch(getUsersThunk(page, usersPerPage))
    }, [page])

    return (
        <div>
            <div className='user-list'>
                {users.map((user) => (
                    <User user={user} key={user.id} />
                ))}
            </div>
            <Pagination />
        </div>

    )
}

export default Users