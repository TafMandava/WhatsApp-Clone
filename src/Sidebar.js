import React from 'react';
import './Sidebar.css';
import { Avatar, IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Sidebar() {
    return (
        <div className="sidebar">
           <div className="sidebar__header">
               <div className="sidebar__headerLeft">
                   <Avatar
                       src=""          
                   />
               </div>
               <div className="sidebar__headerRight">
                   {/* Wrapping Donut icon inside the IconButton to make it clickable  */}
                   <IconButton>
                       <DonutLargeIcon />
                   </IconButton>
                   <IconButton>
                       <ChatIcon />
                   </IconButton>
                   <IconButton>
                       <MoreVertIcon />
                   </IconButton>                  
               </div>               
           </div>
        </div>
    );
}

export default Sidebar;