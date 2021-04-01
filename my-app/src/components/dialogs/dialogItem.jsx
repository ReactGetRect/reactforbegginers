import { NavLink } from 'react-router-dom';
import classes from './dialogItem.module.css';

const DialogItem = (props) => {
    
let path = 'dialogs/' + props.id;

    return (
        <div className = {classes.dialog} activeClassName = {classes.active}>
            <NavLink to = {path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;