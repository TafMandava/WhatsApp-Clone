import React from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Chat() {
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
                <p className="chat__message">
                    <span className="chat__name">
                        Tafadzwa
                    </span>
                    This is a sample message
                    <span className="chat__timestamp">
                        {
                            new Date().toUTCString()
                        }
                    </span>                    
                </p>
                <p className="chat__message">
                    <span className="chat__name">
                        Tafadzwa
                    </span>
                    This is a sample message
                    <span className="chat__timestamp">
                        {
                            new Date().toUTCString()
                        }
                    </span>                    
                </p>
                <p className="chat__message chat__receiver">
                    <span className="chat__name">
                        Tafadzwa
                    </span>
                    This is a sample message
                    <span className="chat__timestamp">
                        {
                            new Date().toUTCString()
                        }
                    </span>                    
                </p>
                <p className="chat__message">
                    <span className="chat__name">
                        Tafadzwa
                    </span>
                    This is a sample message
                    <span className="chat__timestamp">
                        {
                            new Date().toUTCString()
                        }
                    </span>                    
                </p>
                <p className="chat__message">
                    <span className="chat__name">
                        Tafadzwa
                    </span>
                    This is a sample message
                    <span className="chat__timestamp">
                        {
                            new Date().toUTCString()
                        }
                    </span>                    
                </p>
                <p className="chat__message chat__receiver">
                    <span className="chat__name">
                        Tafadzwa
                    </span>
                    This is a sample message
                    <span className="chat__timestamp">
                        {
                            new Date().toUTCString()
                        }
                    </span>                    
                </p>
                <p className="chat__message">
                    <span className="chat__name">
                        Tafadzwa
                    </span>
                    This is a sample message
                    <span className="chat__timestamp">
                        {
                            new Date().toUTCString()
                        }
                    </span>                    
                </p>
                <p className="chat__message">
                    <span className="chat__name">
                        Tafadzwa
                    </span>
                    This is a sample message
                    <span className="chat__timestamp">
                        {
                            new Date().toUTCString()
                        }
                    </span>                    
                </p>
                <p className="chat__message chat__receiver">
                    <span className="chat__name">
                        Tafadzwa
                    </span>
                    This is a sample message
                    <span className="chat__timestamp">
                        {
                            new Date().toUTCString()
                        }
                    </span>                    
                </p>                
                <p className="chat__message">
                    <span className="chat__name">
                        Tafadzwa
                    </span>
                    This is a sample message
                    <span className="chat__timestamp">
                        {
                            new Date().toUTCString()
                        }
                    </span>                    
                </p>
                <p className="chat__message">
                    <span className="chat__name">
                        Tafadzwa
                    </span>
                    This is a sample message
                    <span className="chat__timestamp">
                        {
                            new Date().toUTCString()
                        }
                    </span>                    
                </p>
                <p className="chat__message chat__receiver">
                    <span className="chat__name">
                        Tafadzwa
                    </span>
                    This is a sample message
                    <span className="chat__timestamp">
                        {
                            new Date().toUTCString()
                        }
                    </span>                    
                </p>
            </div>

        </div>
    );
}

export default Chat;