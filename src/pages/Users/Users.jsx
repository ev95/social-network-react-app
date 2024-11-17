import { useEffect } from 'react'
import './Users.css'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersThunk } from '../../store/userReducer';
import User from '../../components/User/User';
import Pagination from '../../components/Pagination/pagination';
import { API } from '../../api/api';

function Users() {
    const dispatch = useDispatch();
    const { users, page, usersPerPage, totalUsers } = useSelector((state) => state.usersState)
    const aaa = useSelector((state) => state)
    console.log(aaa, 'aaa');

    useEffect(() => {
        dispatch(getUsersThunk(page, usersPerPage))
        // API.getUsers(page, count).then((res) => {
        //     dispatch(getUsersAC(res.data.items));
        //     dispatch(setTotaalUsersCountAC(res.data.totalCount));
        // });
    }, [page])

    return (
        <div className='container'>
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