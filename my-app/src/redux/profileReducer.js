const ADD_POST = 'ADD-POST';
const POST_CHANGE = 'POST-CHANGE';

let initialState = {
    posts: [
        { message: 'fuck off, bill', id: 1, likesCount: 7 },
        { message: 'i shit in your kitchen', id: 2, likesCount: 12 },
        { message: 'burgers always taste better in Wendys', id: 3, likesCount: 77 },
    ],

    valueTA: 'type something'

}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case ADD_POST:
            let newPost = {
                message: state.valueTA,
                id: 5,
                likesCount: 33,
            };
            state.posts.push(newPost);
            state.valueTA = '';
            return state;

        case POST_CHANGE:
            state.valueTA = action.text;
            return state;

        default: 
        return state;
    }


}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const postChangeActionCreator = (text) => ({ type: POST_CHANGE, text: text });

export default profileReducer;