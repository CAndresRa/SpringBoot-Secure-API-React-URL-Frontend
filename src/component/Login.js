import React,{ Component } from "react";

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import axios from 'axios';

import './Login.css';

export class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
    }

    componentDidMount(){
        localStorage.setItem('token', '');
    }

    handleSubmit(){
        console.log(this.state)
        axios.post('http://localhost:8080/user/login', {
            email: this.state.email,
            password: this.state.password
        })
            .then(function (response) {
                console.log(response.data);
                if(response.data != ''){
                    localStorage.setItem('token', response.data.accessToken);
                    window.location = '/mainpage';
                }
                
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    onChangeEmail(event){
        event.preventDefault();
        this.setState({
            email: event.target.value
        })
    }

    onChangePassword(event){
        event.preventDefault();
        this.setState({password : event.target.value});
    }

    render(){
        return (
            <div className="login-form">
                <h1>Login</h1>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="email">Email Address</InputLabel>
                    <Input 
                        id="email"
                        name="email"
                        autoComplete="email" autoFocus
                        onChange={this.onChangeEmail} />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input
                        name="password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={this.onChangePassword}
                    />
                </FormControl>
                <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    color="primary"
                    lassName="submit"
                    onClick={this.handleSubmit}
                >
                Sign in
                </Button>
            </div>
        );
    }

}
