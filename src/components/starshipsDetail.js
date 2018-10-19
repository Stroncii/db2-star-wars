import React from 'react';
import axios from 'axios';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Typography from "@material-ui/core/Typography/Typography";
import CharactersList from "./charactersList";
import FilmsList from "./filmsList";

class StarshipsDetailComponent extends React.Component {

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
        let starship = this.state.data;
        if (this.state.isLoading) {
            return (<FontAwesomeIcon className={'loading'} icon="sun" />)
        };
        return (
            <div className="details-container">
                <div className="details-inbox">
                    <Typography variant="h4" component="h3">
                        {starship.name} details page.
                    </Typography>
                    <hr/>
                    <Typography variant="body1" component="p">
                        Model: {starship.model}
                    </Typography>
                    <hr/>
                    <Typography variant="body2" component="p">
                        Manufacturer: {starship.manufacturer}
                    </Typography>
                    <hr/>
                    <Typography variant="body1" component="p">
                        Starship_class: {starship.starship_class}
                    </Typography>
                    <hr/>
                    <Typography variant="body1" component="p">
                        length: {starship.length}
                    </Typography>
                    <hr/>
                    <Typography variant="body1" component="p">
                        Consumables: {starship.consumables}
                    </Typography>
                    <hr/>
                    <Typography variant="body1" component="p">
                        Max athmosphering speed: {starship.max_atmosphering_speed}
                    </Typography>
                    <hr/>
                    <Typography variant="body1" component="p">
                        Crew: {starship.crew}
                    </Typography>
                    <hr/>
                    <Typography variant="body1" component="p">
                        The Maximum number of Megalights: {starship.MGLT}
                    </Typography>
                    <hr/>
                    <Typography variant="body1" component="p">
                        Cost: {starship.cost_in_credits}
                    </Typography>
                    <hr/>
                    <Typography variant="body1" component="p">
                        The maximum length of time that this starship can provide consumables for its entire crew without having to resupply: {starship.cargo_capacity}
                    </Typography>
                    <hr/>
                    <Typography variant="body1" component="p">
                        Passengers: {starship.passengers}
                    </Typography>
                    <hr/>
                </div>
                <CharactersList type={'pilots'} characters={this.state.data.pilots}/>
                <FilmsList  films={this.state.data.films}/>
            </div>
        )
    }
}

export default StarshipsDetailComponent;
