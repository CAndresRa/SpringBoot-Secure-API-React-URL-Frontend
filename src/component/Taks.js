import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardContent } from '@material-ui/core';

export class Taks extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return ( 
            <Card>
                <CardContent>
                    <Typography>
                        {this.props.description}
                    </Typography>
                    <Typography>
                        {this.props.status} - {new Date(this.props.dueDate).toString()}
                    </Typography>
                    <Typography>
                        {this.props.responsible.name + " "}
                        {this.props.responsible.email}
                    </Typography>
                </CardContent>
            </Card>
        );
    }

}