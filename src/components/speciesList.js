import React from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Typography from "@material-ui/core/Typography/Typography";
import {Link} from "react-router-dom";


class SpeciesList extends React.Component {
    state = {
        species: this.props.species,
        isLoading: false
    }

    componentDidMount () {
        this.setState({
            isLoading: true
        });
        if(this.state.species)
            axios.all(this.state.species.map(l => axios.get(l)))
                .then(axios.spread((...res) => {
                    // all requests are now complete
                    this.setState({
                        isLoading: false,
                        species: res.map( el => el.data )
                    })
                }));
    }

    render () {
        if (this.state.isLoading || !this.state.species) {
            return (<div className="details-list">
                <Typography variant="h5" component="h3">
                    Species
                </Typography>
                <hr/>
                Species are loading!
            </div>)
        }

        if(!this.state.isLoading && !this.state.species.length) {
            return (
                <div className="details-list">
                    <Typography variant="h5" component="h3">
                        Species
                    </Typography>
                    <hr/>
                    There are no relevant species
                </div>
            )
        }

        const speciesList = this.state.species.map((item, index) => {
            return (
                <Button key={index}>
                    <Link to={ {pathname: '/species/' + item.name, state: item.url  } }>
                        {item.name}</Link>
                </Button>
            )
        });

        return (
            <div className="details-list">
                <Typography variant="h5" component="h3">
                    Species
                </Typography>
                <hr/>
                {speciesList}
                <hr/>
            </div>
        )
    }
}

export default SpeciesList;
