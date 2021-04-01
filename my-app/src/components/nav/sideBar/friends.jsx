import React from 'react';
import classes from './friends.module.css';
import SideBar from './sideBar.jsx';

const Friends = (props) => {
    let SideBarElement = props.namesData.map((obj) => {
        return (<SideBar src={obj.src} name={obj.name} />)
    })

    return (
        <div className={classes.friends}>
            <div className = {classes.friendsTag}>
                Friends
            </div>
            <div className = {classes.ava}>
                {SideBarElement}
            </div>
        </div>
    )
}

export default Friends;