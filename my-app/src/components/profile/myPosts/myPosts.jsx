import React from 'react';
import classes from './myPosts.module.css';
import SinglePost from './singlePost/singlePost';

const MyPosts = (props) => {
let postsElements = props.posts.map((obj) => {
    return (<SinglePost message={obj.message} likeCount={obj.likesCount} />)
});

let buttonX = React.createRef();

let onPostAdder = () => {
    props.postAdder();
}

let onPostChange = () => {
    let text = buttonX.current.value;
    props.onPostUpdate(text);
}

    return (
        <div className={classes.myPosts}>

            <div>
                <h2>my posts</h2>
            </div>
            <div>
                <div>
                    <textarea onChange = {onPostChange} ref = {buttonX}  
                    value = {props.value} cols="30" rows="5"/>
                </div>
                <div>
                    <button onClick = {onPostAdder}>Submit</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>

        </div>

    )
}

export default MyPosts;