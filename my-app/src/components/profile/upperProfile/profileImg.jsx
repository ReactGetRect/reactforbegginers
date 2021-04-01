import classes from './profileImg.module.css';

let ProfileImg = () => {
    return (
        <div> 
            <img class = {classes.img} src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pokai_Bucht_auf_Oahu.jpg/1200px-Pokai_Bucht_auf_Oahu.jpg' />
        </div>
    )
}

export default ProfileImg;