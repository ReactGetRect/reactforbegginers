import React from 'react';
import DialogItem from './dialogItem';
import classes from './dialogs.module.css';
import Message from './messages';

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map( obj => <DialogItem name={obj.name} id={obj.id} />)

    let messagesElements = props.messages.map(obj => <Message message={obj.message} />)

    let textArea = React.createRef();

    let onMessageAdder = () => {
        props.messageAdder();
    }

    let onTextAreaChange = () => {
        let message = textArea.current.value;
        props.onTextAreaUpdate(message);
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <div className={classes.messageArea}>
                <div>
                    <textarea ref={textArea} onChange={onTextAreaChange}
                        value={props.valueTAdialog}>
                    </textarea>
                </div>
                <div>
                    <button onClick={onMessageAdder}>Send Message</button>
                </div>
            </div>
        </div>

    )
}

export default Dialogs;
