import React, {Component} from 'react';
import {TaksList} from './TaksList';
import {NavBar} from './NavBar';
import {NewTask} from './NewTask';


export class MainPage extends Component{
    constructor(props){
        super(props);
        console.log(this.props.items);
        this.state = {
            items : this.props.items
        }

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
                <TaksList taksList={this.state.items} />
            </div>
        );
    }
}