import React from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Typography from "@material-ui/core/Typography/Typography";
import {Link} from "react-router-dom";


class PlanetsList extends React.Component {
    state = {
        planets: this.props.planets,
        isLoading: false
    }

    componentDidMount () {
        this.setState({
            isLoading: true
        });
        if(this.state.planets)
            axios.all(this.state.planets.map(l => axios.get(l)))
            .then(axios.spread((...res) => {
                // all requests are now complete
                this.setState({
                    isLoading: false,
                    planets: res.map( el => el.data )
                })
            }));
    }

    render () {
        if (this.state.isLoading || !this.state.planets) {
            return (<div className="details-list">
                <Typography variant="h5" component="h3">
                    Planets
                </Typography>
                <hr/>
                PLANETS IS LOADING!
            </div>)
        }

        if(!this.state.isLoading && !this.state.planets.length) {
            return (
                <div className="details-list">
                    <Typography variant="h5" component="h3">
                        Planets
                    </Typography>
                    <hr/>
                    There is no planet according the entity
                </div>
            )
        }

        const planetsList = this.state.planets.map((item, index) => {
            return (
                <Button key={index}>
                    <Link to={ {pathname: '/planets/' + item.name, state: item.url  } }>
                        {item.name}</Link>
                </Button>
            )
        });

        return (
            <div className="details-list">
                <Typography variant="h5" component="h3">
                    Planets
                </Typography>
                <hr/>
                {planetsList}
                <hr/>
            </div>
        )
    }
}

export default PlanetsList;
