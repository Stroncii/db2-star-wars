import React from 'react';
import axios from 'axios';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Typography from "@material-ui/core/Typography/Typography";
import VehiclesList from "./vehiclesList";
import FilmsList from "./filmsList";
import SpeciesList from "./speciesList";
import StarshipsList from "./starshipsList";
import HomeworldComponent from './homeworld';

class CharactersDetailComponent extends React.Component {

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
        let character = this.state.data;
        if (this.state.isLoading) {
            return (<FontAwesomeIcon className={'loading'} icon="sun" />)
        };
        return (
            <div className="details-container">
                <div className="details-inbox">
                    <Typography variant="h4" component="h3">
                        {character.name} details page.
                    </Typography>
                    <hr/>
                    <Typography variant="body1" component="p">
                        Gender: {character.gender}
                    </Typography>
                    <hr/>
                    <Typography variant="body2" component="p">
                        Height: {character.height} cm
                    </Typography>
                    <hr/>
                    <Typography variant="body1" component="p">
                        Mass: {character.mass} kg
                    </Typography>
                    <hr/>
                    <Typography variant="body1" component="p">
                        Birth: {character.birth_year}
                    </Typography>
                    <hr/>
                    <Typography variant="body1" component="p">
                        Skin color: {character.skin_color}
                    </Typography>
                    <hr/>
                    <Typography variant="body1" component="p">
                        Eye color: {character.eye_color}
                    </Typography>
                    <hr/>
                    <Typography variant="body1" component="p">
                        Homeworld: { <HomeworldComponent planet={character.homeworld}/>}
                    </Typography>
                    <hr/>
                </div>
                <SpeciesList species={this.state.data.species}/>
                <StarshipsList starships={this.state.data.starships}/>
                <VehiclesList vehicles={this.state.data.vehicles}/>
                <FilmsList  films={this.state.data.films}/>
            </div>
        )
    }
}

export default CharactersDetailComponent;
