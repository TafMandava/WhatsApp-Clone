import React from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

function Chat({ messages }) {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />

                <div className="chat__headerInfo">
                    <h3>Chat room</h3>
                    <p>Last seen timestamp</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>                  
            </div> 

            <div className="chat__body">
                { messages?.map((message) => {
                    return (
                        <p key={message?._id} className={`chat__message ${!message?.received && "chat__receiver"}`} >
                            <span className="chat__name">
                                {message?.name}
                            </span>
                            {message?.message}
                            <span className="chat__timestamp">
                                {message?.timestamp}
                            </span>                    
                        </p>
                    );
                  })
                }
            </div>

            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input
                        placeholder="Type a message"
                        type="text"
                    />
                    <button type="submit">Send</button>
                </form>
                <MicIcon />
            </div>

        </div>
    );
}

export default Chat;