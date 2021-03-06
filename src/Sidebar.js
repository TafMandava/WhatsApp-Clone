import React from 'react';
import './Sidebar.css';
import { Avatar, IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className="sidebar">
           <div className="sidebar__header">
               <div className="sidebar__headerLeft">
                   <Avatar
                       src="https://lh3.googleusercontent.com/ogw/ADGmqu8BNzcpdkHqJtSFO9SHL2hb_EP-HeqabUxqxtuT=s192-c-mo"          
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
           <div className="sidebar__search">
               <div className="sidebar__searchContainer">
                   <SearchOutlinedIcon />
                   <input placeholder="Search chat" type="text" />
               </div>
           </div>
           <div className="sidebar__chats">
               <SidebarChat />
               <SidebarChat />
               <SidebarChat />
           </div>
        </div>
    );
}

export default Sidebar;