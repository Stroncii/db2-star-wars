import React from 'react';
import axios from 'axios';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Typography from "@material-ui/core/Typography/Typography";
import CharactersList from "./charactersList";
import FilmsList from "./filmsList";

class PlanetsDetailComponent extends React.Component {

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
        let planet = this.state.data;
        if (this.state.isLoading) {
            return (<FontAwesomeIcon className={'loading'} icon="sun" />)
        };
        return (
            <div className="details-container">
                <div className="details-inbox">
                    <Typography variant="h4" component="h3">
                        {planet.name} details page.
                    </Typography>
                    <hr/>
                    <Typography variant="body1" component="p">
                        Rotation period: {planet.rotation_period}
                    </Typography>
                    <hr/>
                    <Typography variant="body2" component="p">
                        Orbital period: {planet.orbital_period}
                    </Typography>
                    <hr/>
                    <Typography variant="body1" component="p">
                        Gravity: {planet.gravity}
                    </Typography>
                    <hr/>
                    <Typography variant="body1" component="p">
                        Population: {planet.population}
                    </Typography>
                    <hr/>
                    <Typography variant="body1" component="p">
                        Terrain: {planet.terrain}
                    </Typography>
                    <hr/>
                    <Typography variant="body1" component="p">
                        Climate: {planet.climate}
                    </Typography>
                    <hr/>
                    <Typography variant="body1" component="p">
                        Water: {planet.surface_water}
                    </Typography>
                    <hr/>
                </div>
                <CharactersList type={'residents'} characters={this.state.data.residents}/>
                <FilmsList films={this.state.data.films}/>
            </div>
        )
    }
}

export default PlanetsDetailComponent;
