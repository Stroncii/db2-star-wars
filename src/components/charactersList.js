import React from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Typography from "@material-ui/core/Typography/Typography";
import {Link} from "react-router-dom";


class CharactersList extends React.Component {
    state = {
        characters: this.props.characters,
        isLoading: false,
        type: this.props.type
    }

    componentDidMount () {
        this.setState({
            isLoading: true
        });
        if(this.state.characters)
            axios.all(this.state.characters.map(l => axios.get(l)))
                .then(axios.spread((...res) => {
                    // all requests are now complete
                    this.setState({
                        isLoading: false,
                        characters: res.map( el => el.data )
                    })
                }));
    }

    render () {
        let type = this.state.type.charAt(0).toUpperCase() + this.state.type.slice(1); // capitallize
        if (this.state.isLoading || !this.state.characters) {
            return (<div className="details-list">
                <Typography variant="h5" component="h3">
                    {type}
                </Typography>
                <hr/>
                {type} are loading!
                <hr/>
            </div>)
        }

        if(!this.state.isLoading && !this.state.characters.length) {
            return (
                <div className="details-list">
                    <Typography variant="h5" component="h3">
                        {type}
                    </Typography>
                    <hr/>
                    {type} do not exist
                    <hr/>
                </div>
            )
        }

        const charactersList = this.state.characters.map((item, index) => {
            return (
                <Button key={index}>
                    <Link to={ {pathname: '/people/' + item.name, state: item.url  } }>
                        {item.name}</Link>
                </Button>
            )
        });

        return (
            <div className="details-list">
                <Typography variant="h5" component="h3">
                    {type}
                </Typography>
                <hr/>
                {charactersList}
                <hr/>
            </div>
        )
    }
}

export default CharactersList;
