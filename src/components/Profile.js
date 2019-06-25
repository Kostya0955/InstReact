import React, { Component } from 'react';
import User from './User';
import Palette from './Palette'
const Profile = () => {
    return (
        <div className = "container profile">
            <User
                src = "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Man"
                name="some_cool_man"/>
            <Palette/>
        </div>

    )
}

export default Profile;