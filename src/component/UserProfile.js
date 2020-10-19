import React,{Component} from 'react';
import {NavBar} from './NavBar';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

import './ProfileUpdate.css';

export class UserProfile extends Component{
    constructor(props){
        super(props);

    }

    componentDidMount(){
        if(localStorage.getItem('token') == ''){
            window.location ='/';
        }
    }


    render(){
        return(
            <div>
                <NavBar />

                <div className="update-form">
                    <h1>Update Profile</h1>
                    
                    <Avatar alt="Remy Sharp" style={{ justifyContent: "center", display: "flex", width: 100, height: 100 }} src="/static/images/avatar/1.jpg" />
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">Email Address</InputLabel>
                        <Input id="email" name="email" autoComplete="email" autoFocus />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Current Password</InputLabel>
                        <Input
                            name="password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">New Password</InputLabel>
                        <Input
                            name="password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Confirm New Password</InputLabel>
                        <Input
                            name="password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                    </FormControl>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        lassName="submit"
                        href="/mainpage"
                    >
                    Update
                    </Button>
                </div>    
            </div>
        );
    }
}