import React from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button/Button";
// import { Link } from 'react-router-dom';
// import Button from "@material-ui/core/Button/Button";

class HomeworldComponent extends React.Component {

    state = {
        planet: this.props.planet,
        data: {},
        isLoading: false
    }

    componentDidMount () {
        this.setState({
            isLoading: true
        });
        this.props.planet && axios.get(this.props.planet).then((response) => {
            this.setState({
                isLoading: false,
                data: response.data
            })
        });
    }

    render () {
        let item = this.state.data;
        if (this.state.isLoading) {
            return (<span>'Homeworld is loading'</span>);
        }
        return (
            <Button>
                <Link to={ {pathname: '/planets/' + item.name, state: item.url  } }>
                    {item.name}</Link>
            </Button>
        )
    }
}

export default HomeworldComponent;
