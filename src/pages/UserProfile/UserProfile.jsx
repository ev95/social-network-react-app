import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaVk, FaGlobe, FaYoutube } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { getUsersByIdThunk } from '../../store/profileReducer';
import './UserProfile.css'

function UserProfile() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { userProfile } = useSelector((state) => state.profileState);

    useEffect(() => {
        dispatch(getUsersByIdThunk(id))
    }, [id])

    console.log(userProfile)

    return (
        <div className="profile-container">
            <div className='img-wrapper'>
                <img src={userProfile?.photos?.large ? userProfile?.photos?.small : 'https://media.istockphoto.com/id/1330180806/vector/blue-sign-design-for-photo-placeholder-on-app-design-user-interface-design-avatar-placeholder.jpg?s=612x612&w=0&k=20&c=jMgBjBh-shvWi0ojpkHSMFnTS9vLXFBKws_VLFhK2eo='} alt="User 1" className="user-image" />
                <span className='curved-text'>{userProfile.lookingForAJob ? '#openToWork' : ''}</span>
            </div>

            <div className='user-info'>
                <h1>{userProfile?.fullName}</h1>
                <i className='about-me'>{userProfile.aboutMe}</i>
                <div className='socials'>
                    <h3>Follow me in</h3>
                    <div className="contact-links">
                        <a target="_blank" href={userProfile?.contacts?.facebook ? userProfile?.contacts?.facebook : 'https://www.facebook.com/'} title="Facebook" ><FaFacebook /> </a>
                        <a target="_blank" href={userProfile?.contacts?.github ? userProfile?.contacts?.github : 'https://github.com/'} title="GitHub"><FaGithub /></a>
                        <a target="_blank" href={userProfile?.contacts?.instagram ? userProfile?.contacts?.instagram : 'https://www.instagram.com/'} title="Instagram"><FaInstagram /></a>
                        <a target="_blank" href={userProfile?.contacts?.twitter ? userProfile?.contacts?.twitter : 'https://x.com/'} title="Twitter" ><FaTwitter /></a>
                        <a target="_blank" href={userProfile?.contacts?.vk ? userProfile?.contacts?.vk : 'https://vk.com/'} title="VK" ><FaVk /></a>
                        <a target="_blank" href={userProfile?.contacts?.website ? userProfile?.contacts?.website : 'https://www.google.com/'} title="Website" ><FaGlobe /></a>
                        <a target="_blank" href={userProfile?.contacts?.youtube ? userProfile?.contacts?.youtube : 'https://www.youtube.com/'} title="YouTube" ><FaYoutube /></a>
                    </div>
                </div>
                <div className="job-info">
                    <h3>Skils</h3>
                    {userProfile?.lookingForAJobDescription ? userProfile?.lookingForAJobDescription : '- - - - '}
                </div>
            </div>
        </div >

    )
}

export default UserProfile