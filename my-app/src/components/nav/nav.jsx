import { NavLink } from 'react-router-dom';
import classes from './nav.module.css';
import Friends from './sideBar/friends.jsx';


const Nav = (props) => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to = '/profile' activeClassName = {classes.active}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to = '/dialogs' activeClassName = {classes.active}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to = '/pictures' activeClassName = {classes.active}>Pictures</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to = '/stories' activeClassName = {classes.active}>Stories</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to = '/settings' activeClassName = {classes.active}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Nav;