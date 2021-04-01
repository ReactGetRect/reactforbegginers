import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sideBarReducer from './sideBarReducer';

let store = {
    _state: {
        profilePage: {
            posts: [
                { message: 'fuck off, bill', id: 1, likesCount: 7 },
                { message: 'i shit in your kitchen', id: 2, likesCount: 12 },
                { message: 'burgers always taste better in Wendys', id: 3, likesCount: 77 },
            ],

            valueTA: 'type something'
        },

        dialogsPage: {
            dialogs: [
                { name: 'Bill', id: 1 },
                { name: 'Samson', id: 2 },
                { name: 'Vazgen', id: 3 },
                { name: 'Gnida', id: 4 },
                { name: 'Boris', id: 5 },
            ],

            messages: [
                { message: 'Where is my money', id: 1 },
                { message: 'I will rape your dog, bitch', id: 2 },
                { message: 'I am already by your door', id: 3 },
                { message: 'fuck off', id: 4 }
            ],

            valueTAdialog: 'type message'
        },

        sideBar: {
            namesData: [
                { name: 'Carl', src: 'https://i.redd.it/8evvghsqjaq51.png' },
                { name: 'Moe', src: 'https://pbs.twimg.com/profile_images/2322676104/Moe_Szyslak_400x400.jpg' },
                { name: 'Lenny', src: 'https://i.ytimg.com/vi/0iPasplDkUY/hqdefault.jpg' },
            ]
        },

    },
    _callSubscriber() {
        console.log('');
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sideBar = sideBarReducer(this._state.sideBar, action)

        this._callSubscriber(this._state);

        
}
}




export default store;