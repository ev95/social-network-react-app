import { useDispatch, useSelector } from 'react-redux'
import { useState } from "react";
import { changePageAC } from '../../store/userReducer';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";



import './Pagination.css'

function Pagination() {
    const dispatch = useDispatch();
    const { page, usersPerPage, totalUsers } = useSelector((state) => state.usersState);

    const [chunkCount, setChunkCount] = useState(10)
    const [chunkIndex, setChunkIndex] = useState(1)

    const maxPageCount = Math.round(totalUsers / usersPerPage);

    const paginationPages = [];

    const getPages = (index) => {
        let pagesFrom = (index - 1) * chunkCount + 1;
        let pagesTo = (pagesFrom + chunkCount) - 1;
        if (pagesTo > maxPageCount) {
            pagesTo = maxPageCount;
        }

        // dispatch(changePageAC(pagesFrom))
        for (let i = pagesFrom; i <= pagesTo; i++) {
            paginationPages.push(i)
        }
    }

    getPages(chunkIndex);



    return (
        <div className='pagination'>
            {
                chunkIndex > 1 && <button className='controls' onClick={() => setChunkIndex(chunkIndex - 1)}> <IoIosArrowBack />
                </button>
            }
            {paginationPages.map((p) => (
                <button key={p} className={p === page ? "page active" : 'page'} onClick={() => dispatch(changePageAC(p))}>{p}</button>
            ))
            }
            {
                chunkIndex * chunkCount >= maxPageCount ? "" : <button className='controls' onClick={() => setChunkIndex(chunkIndex + 1)}>
                    <IoIosArrowForward />
                </button>
            }
        </div>
    )
}

export default Pagination