import ProfileImg from './upperProfile/profileImg';
import MyPostsContainer from './myPosts/MyPostsContainer.jsx';
import classes from './profile.module.css';
import Description from './upperProfile/avaDescription';
import MyPosts from './myPosts/myPosts';

let Profile = (props) => {
    return (
        <div>
            <div>
                <ProfileImg />
                <Description />
                <MyPosts />
            </div>
        </div>
    )

}

export default Profile;