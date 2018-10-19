import React from 'react';
import axios from 'axios';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Typography from "@material-ui/core/Typography/Typography";
import PlanetsList from './planetList';
import VehiclesList from "./vehiclesList";
import StarshipsList from "./starshipsList";
import SpeciesList from "./speciesList";
import CharactersList from "./charactersList";

class FilmsDetailComponent extends React.Component {

    state = {
        url: this.props.location.state,
        data: {},
        isLoading: false
    }

    componentDidMount () {
        this.setState({
            isLoading: true
        });
        axios.get(this.state.url).then(response => {
            this.setState({
                data: response.data,
                isLoading: false
            })
        });
    }

    render () {
        let film = this.state.data;
        if (this.state.isLoading) {
            return (<FontAwesomeIcon className={'loading'} icon="sun" />)
        };
        return (
            <div className="details-container">
                <div className="details-inbox">
                        <Typography variant="h4" component="h3">
                            {film.title} details page.
                        </Typography>
                        <hr/>
                        <Typography variant="body1" component="p">
                            {film.opening_crawl}
                        </Typography>
                        <hr/>
                        <Typography variant="body2" component="p">
                            Director of the film is {film.director}
                        </Typography>
                        <hr/>
                        <Typography component="p">
                            Film was realised in {new Date(film.release_date).toLocaleDateString()}
                        </Typography>
                    <hr/>
                    <Typography component="p">
                        Producer: {film.producer}
                    </Typography>
                    <hr/>
                </div>
                <PlanetsList planets={this.state.data.planets}/>
                <CharactersList type={'characters'} characters={this.state.data.characters}/>
                <SpeciesList species={this.state.data.species}/>
                <VehiclesList vehicles={this.state.data.vehicles}/>
                <StarshipsList starships={this.state.data.starships}/>
            </div>
        )
    }
}

export default FilmsDetailComponent;
