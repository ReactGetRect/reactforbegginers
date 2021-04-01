import classes from './sidebar.module.css';

const SideBar = (props) => {
    return (
        <div className={classes.sideBar}>
            <div>
                <div>
                    <img src={props.src} />
                    <div>
                        {props.name}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar;