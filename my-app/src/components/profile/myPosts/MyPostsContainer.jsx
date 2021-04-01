import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, postChangeActionCreator } from '../../../redux/profileReducer.js';
import MyPosts from './myPosts';

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        value: state.profilePage.valueTA,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postAdder: () => {
            dispatch(addPostActionCreator());
        },
        onPostUpdate: (text) => {
            dispatch(postChangeActionCreator(text));
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;