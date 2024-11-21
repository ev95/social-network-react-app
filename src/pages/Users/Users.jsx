import { useEffect } from 'react'
import './Users.css'
import { useDispatch, useSelector } from 'react-redux'
import User from '../../components/User/User';
import Pagination from '../../components/Pagination/pagination';
import { API } from '../../api/api';
import { getUsersThunk } from '../../store/slices/usersSlice';

function Users() {
    const dispatch = useDispatch();
    const { users, page, usersPerPage, loading } = useSelector((state) => state.usersState)

    useEffect(() => {
        dispatch(getUsersThunk({ page, usersPerPage }))
    }, [page])

    return (
        <div className='container'>
            {loading
                ?
                <div className='loading'><img src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1263.gif" alt="" /> </div>
                :
                <div className='user-list'>

                    {users.map((user) => (
                        <User user={user} key={user.id} />
                    ))}
                </div>
            }

            {/* <Pagination /> */}
        </div>

    )
}

export default Users