import { Avatar } from '@mui/material';
import React from 'react'
import "./Sidebar.css"

function Sidebar() {

    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    )


  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <img 
            src='https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' 
            alt=''
            />
            <Avatar className='sidebar__avatar' />
            <h2>Nic Stadler</h2>
            <h4>NicholasStadler1@gmail.com</h4>
        </div>

        <div className='sidebar__stats'>
            <div className='sidebar__stat'>
                <p>Who viewed you</p>
                <p className='sidebar__statNumber'>2,453</p>
            </div>
            <div className='sidebar__stat'>
                <p>Views on post</p>
                <p className='sidebar__statNumber'>3,231</p>
            </div>
        </div>

        <div className='sidebar__bottom'>
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('softwareengineering')}
            {recentItem('design')}
            {recentItem('developer')}
        </div>
    </div>
  );
}

export default Sidebar