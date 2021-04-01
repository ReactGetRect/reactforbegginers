import React from 'react';
import { messageAddActionCreator, messageChangeActionCreator } from '../../../redux/dialogsReducer.js';
import { connect } from 'react-redux';
import Dialogs from './dialogs.jsx';

const mapStateToProps2 = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        valueTAdialog: state.dialogsPage.valueTAdialog,
    }
}

const mapDispatchToProps2 = (dispatch) => {
    return {
        onTextAreaUpdate: (message) => {
            dispatch(messageChangeActionCreator(message));
        },
        messageAdder: () => {
            dispatch(messageAddActionCreator());
        },
    }
}

const MessageAreaContainer = connect(mapStateToProps2, mapDispatchToProps2)(Dialogs);

export default MessageAreaContainer;
