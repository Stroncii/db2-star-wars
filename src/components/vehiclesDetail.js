import React from 'react';
import axios from 'axios';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Typography from "@material-ui/core/Typography/Typography";
import CharactersList from "./charactersList";
import FilmsList from "./filmsList";

class VehiclesDetailComponent extends React.Component {

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
        let vehicle = this.state.data;
        if (this.state.isLoading) {
            return (<FontAwesomeIcon className={'loading'} icon="sun" />)
        };
        return (
            <div className="details-container">
                <div className="details-inbox">
                    <Typography variant="h4" component="h3">
                        {vehicle.name} details page.
                    </Typography>
                    <hr/>
                    <Typography variant="body1" component="p">
                        Model: {vehicle.model}
                    </Typography>
                    <hr/>
                    <Typography variant="body2" component="p">
                        Manufacturer: {vehicle.manufacturer}
                    </Typography>
                    <hr/>
                    <Typography variant="body1" component="p">
                        Vehicle class: {vehicle.vehicle_class}
                    </Typography>
                    <hr/>
                    <Typography variant="body1" component="p">
                        length: {vehicle.length}
                    </Typography>
                    <hr/>
                    <Typography variant="body1" component="p">
                        Consumables: {vehicle.consumables}
                    </Typography>
                    <hr/>
                    <Typography variant="body1" component="p">
                        Max athmosphering speed: {vehicle.max_atmosphering_speed}
                    </Typography>
                    <hr/>
                    <Typography variant="body1" component="p">
                        Crew: {vehicle.crew}
                    </Typography>
                    <hr/>
                    <Typography variant="body1" component="p">
                        Cost: {vehicle.cost_in_credits}
                    </Typography>
                    <hr/>
                    <Typography variant="body1" component="p">
                        The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply: {vehicle.cargo_capacity}
                    </Typography>
                    <hr/>
                    <Typography variant="body1" component="p">
                        Passengers: {vehicle.passengers}
                    </Typography>
                    <hr/>
                </div>
                <CharactersList type={'pilots'} characters={this.state.data.pilots}/>
                <FilmsList  films={this.state.data.films}/>
            </div>
        )
    }
}

export default VehiclesDetailComponent;
